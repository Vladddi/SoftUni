package orm;

import orm.annotations.Column;
import orm.annotations.Entity;
import orm.annotations.Id;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

import static orm.Connector.getConnection;

public class EntityManager<E> implements DBContext<E> {

    private static final String INSERT_QUERY_FORMAT = "INSERT INTO %s (%s) VALUES (%s)";
    private static final String DELETE_RECORD_BY_CONDITION_FORMAT = "DELETE FROM %s WHERE %s = %s";
    private static final String UPDATE_QUERY_BY_ID_FORMAT = "UPDATE %s e SET %s WHERE e.id = %d";
    private static final String FIND_FIRST_WITH_CONDITION_QUERY = "SELECT * FROM %s %s LIMIT 1";
    private static final String FIND_ALL_WITH_CONDITION_QUERY = "SELECT * FROM %s %s";
    private static final String FIND_FIRST_QUERY = "SELECT * FROM %s LIMIT 1";
    private static final String FIND_ALL_QUERY = "SELECT * FROM %s";
    private static final String CREATE_QUERY_FORMAT = "CREATE TABLE %s (id INT PRIMARY KEY AUTO_INCREMENT, %s );";
    private static final String ADD_COLUMN_FORMAT = "ADD COLUMN %s %s";
    private static final String DROP_COLUMN_FORMAT = "DROP COLUMN %s";

    private static final String ALTER_TABLE_FORMAT = "ALTER TABLE %s %s";
    private static final String GET_ALL_COLUMN_NAME_BY_TABLE_NAME =
            "SELECT `COLUMN_NAME` from `INFORMATION_SCHEMA`.`COLUMNS` WHERE `TABLE_SCHEMA` = 'soft_uni'" +
                    "AND `TABLE_NAME` = ?";

    private static final String ID_COLUMN_MISSING_MASSAGE = "Entity missing an Id column";
    private static final String CLASS_MUST_BE_ENTITY_MESSAGE = "Class must be Entity";
    private static final String UPDATE_VALUE_FORMAT = "%s = %s";
    private static final String CREATE_VALUE_FORMAT = "%s %s";


    private static final String WHERE_KEY_WORD = "WHERE ";
    private static final String VARCHAR = "VARCHAR(45)";
    private static final String INT = "INT";
    private static final String DATE = "DATE";


    private final Connection connection;

    public EntityManager() throws SQLException {
        this.connection = getConnection();
    }

    @Override
    public boolean persist(E entity) throws SQLException, IllegalAccessException {
        final Field idColumn = getIdColumn(entity.getClass());
        idColumn.setAccessible(true);

        final Object idValue = idColumn.get(entity);

        if (idValue == null || (long) idValue <= 0) {
            return doInsert(entity);
        }

        return doUpdate(entity, idColumn);

    }

    private boolean doUpdate(E entity, Field idColumn) throws SQLException, IllegalAccessException {
        final String tableName = getTableName(entity.getClass());

        final List<KeyValuePair> keyValuePairs = getKeyValuePairs(entity);

        final String updateValues = keyValuePairs.stream()
                .map(keyValuePair -> String.format(UPDATE_VALUE_FORMAT, keyValuePair.key, keyValuePair.value))
                .collect(Collectors.joining(","));

        final int idValue = Integer.parseInt(idColumn.get(entity).toString());

        final String insertQuery = String.format(UPDATE_QUERY_BY_ID_FORMAT, tableName, updateValues, idValue);

        return connection.prepareStatement(insertQuery).execute();
    }


    @Override
    public Iterable<E> find(Class<E> table) throws SQLException,
            InvocationTargetException,
            NoSuchMethodException,
            InstantiationException,
            IllegalAccessException {

        final String tableName = getTableName(table);

        final PreparedStatement findFirstStatement = connection.prepareStatement(String.format(FIND_ALL_QUERY, tableName));

        return getPOJOs(findFirstStatement, table);
    }

    @Override
    public Iterable<E> find(Class<E> entityType, String where) throws SQLException,
            InvocationTargetException,
            NoSuchMethodException,
            InstantiationException,
            IllegalAccessException {
        String tableName = this.getTableName(entityType);

        String sql = String.format("SELECT * FROM %s %s",
                tableName, where == null ? "" : "WHERE " + where);

        ResultSet resultSet = this.connection.prepareStatement(sql).executeQuery();

        List<E> result = new ArrayList<>();

        E entity = this.createEntity(entityType, resultSet);
        while (entity != null) {
            result.add(entity);
            entity = this.createEntity(entityType, resultSet);
        }

        return result;
    }

    @Override
    public E findFirst(Class<E> table) throws SQLException,
            InvocationTargetException,
            NoSuchMethodException,
            InstantiationException,
            IllegalAccessException {

        final String tableName = getTableName(table);

        final PreparedStatement findFirstStatement =
                connection.prepareStatement(String.format(FIND_FIRST_QUERY, tableName));


        return findFirst(table, null);
    }

    @Override
    public E findFirst(Class<E> table, String condition) throws SQLException,
            InvocationTargetException,
            NoSuchMethodException,
            InstantiationException,
            IllegalAccessException {

        final String tableName = getTableName(table);
        final String finalCondition = condition != null
                ? WHERE_KEY_WORD + condition
                : "";

        final PreparedStatement findFirstStatement =
                connection.prepareStatement(String.format(FIND_FIRST_WITH_CONDITION_QUERY, tableName, finalCondition));


        return getPOJO(findFirstStatement, table);
    }

    private E getPOJO(PreparedStatement findFirstStatement, Class<E> table) throws SQLException,
            NoSuchMethodException,
            InvocationTargetException,
            InstantiationException,
            IllegalAccessException {

        final ResultSet resultSet = findFirstStatement.executeQuery();
        resultSet.next();

        final E entity = table.getDeclaredConstructor().newInstance();

        fillEntity(table, resultSet, entity);

        return entity;
    }

    private Iterable<E> getPOJOs(PreparedStatement findFirstStatement, Class<E> table) throws SQLException,
            NoSuchMethodException,
            InvocationTargetException,
            InstantiationException,
            IllegalAccessException {
        final ResultSet resultSet = findFirstStatement.executeQuery();

        List<E> entities = new ArrayList<>();

        while (resultSet.next()) {
            final E entity = table.getDeclaredConstructor().newInstance();

            fillEntity(table, resultSet, entity);

            entities.add(entity);
        }

        return entities;
    }

    private void fillEntity(Class<E> table, ResultSet resultSet, E entity) {

    }

    @Override
    public void doCreate(Class<E> entity) throws SQLException {
        final String tableName = getTableName(entity);

        final List<KeyValuePair> fieldsWithTypes = getAllFieldsAndTypesInKeyValueParis(entity);

        final String fieldsWithTypesFormat = fieldsWithTypes
                .stream()
                .map(keyValuePair -> String.format(CREATE_VALUE_FORMAT, keyValuePair.key, keyValuePair.value))
                .collect(Collectors.joining(", "));

        final PreparedStatement createStatement =
                connection.prepareStatement(String.format(CREATE_QUERY_FORMAT, tableName, fieldsWithTypesFormat));

        createStatement.execute();
    }

    @Override
    public void doAlter(Class<E> entity) throws SQLException {
        final String tableName = getTableName(entity);
        final String columnsStatementForNewFields = addColumnsStatementForNewFields(entity, tableName);

        String alterQuery = String.format(ALTER_TABLE_FORMAT, tableName, columnsStatementForNewFields);

        final PreparedStatement alterStatement = connection.prepareStatement(alterQuery);

        alterStatement.execute();

    }

    @Override
    public void doDelete(E entity) throws SQLException, IllegalAccessException {
        final String tableName = getTableName(entity.getClass());

        final Field idField = getIdColumn(entity.getClass());

        final String idName = getSQLColumnName(idField);
        final Object idValue = getFieldValue(entity, idField);

        final String deleteQuery = String.format(DELETE_RECORD_BY_CONDITION_FORMAT, tableName, idName, idValue);


        final PreparedStatement deleteStatement = connection.prepareStatement(deleteQuery);

        deleteStatement.execute();
    }

    private Object getFieldValue(E entity, Field idName) throws IllegalAccessException {
        idName.setAccessible(true);
        return idName.get(entity);
    }

    private String addColumnsStatementForNewFields(Class<E> entity, String tableName) throws SQLException {
        final Set<String> sqlColumns = getSQLColumnNames(entity, tableName);

        final List<Field> allFieldsWithoutId = getAllFieldsWithoutId(entity);

        List<String> newFieldsStatement = new ArrayList<>();

        for (Field field : allFieldsWithoutId) {
            final String fieldName = getSQLColumnName(field);

            if (sqlColumns.contains(fieldName)) {

                continue;
            }

            final String sqlType = getSQLType(field.getType());

            String addStatement = String.format(ADD_COLUMN_FORMAT, fieldName, sqlType);

            newFieldsStatement.add(addStatement);
        }

        return String.join(", ", newFieldsStatement);
    }

    private Set<String> getSQLColumnNames(Class<E> entity, String tableName) throws SQLException {
        Set<String> allFields = new HashSet<>();

        final PreparedStatement getAllFieldsStatement = connection.prepareStatement(GET_ALL_COLUMN_NAME_BY_TABLE_NAME);
        getAllFieldsStatement.setString(1, tableName);

        final ResultSet resultSet = getAllFieldsStatement.executeQuery();

        while (resultSet.next()) {
            allFields.add(resultSet.getString(1));
        }

        return allFields;
    }

    private List<KeyValuePair> getAllFieldsAndTypesInKeyValueParis(Class<E> entity) {

        return getAllFieldsWithoutId(entity)
                .stream()
                .map(field -> new KeyValuePair(getSQLColumnName(field), getSQLType(field.getType())))
                .toList();

    }

    private String getSQLType(Class<?> type) {

        if (type == Integer.class || type == int.class) {
            return INT;
        } else if (type == LocalDate.class) {
            return DATE;
        }

        return VARCHAR;
    }

    private String getSQLColumnName(Field field) {
        return field.getAnnotationsByType(Column.class)[0].name();
    }

    private List<Field> getAllFieldsWithoutId(Class<E> entity) {
        return Arrays.stream(entity.getDeclaredFields())
                .filter(field -> !field.isAnnotationPresent(Id.class)
                        && field.isAnnotationPresent(Column.class))
//                .map(field -> field.getName())
                .toList();

    }


    private E createEntity(Class<E> entityType, ResultSet resultSet) throws SQLException, NoSuchMethodException, InvocationTargetException, InstantiationException, IllegalAccessException {
        if (!resultSet.next()) {
            return null;
        }

        E entity = entityType.getDeclaredConstructor().newInstance();

        Field[] declaredFields = entityType.getDeclaredFields();

        for (Field declaredField : declaredFields) {
            if (!declaredField.isAnnotationPresent(Column.class) &&
                    !declaredField.isAnnotationPresent(Id.class)) {
                continue;
            }

            Column columnAnnotation = declaredField.getAnnotation(Column.class);

            String fieldName = columnAnnotation == null
                    ? declaredField.getName()
                    : columnAnnotation.name();


            String value = resultSet.getString(fieldName);
            entity = this.fillData(entity, declaredField, value);
        }

        return entity;
    }

    private E fillData(E entity, Field field, String value) throws IllegalAccessException {
        field.setAccessible(true);

        if (field.getType() == long.class || field.getType() == Long.class) {
            field.setLong(entity, Long.parseLong(value));
        } else if (field.getType() == int.class || field.getType() == Integer.class) {
            field.setInt(entity, Integer.parseInt(value));
        } else if (field.getType() == LocalDate.class) {
            field.set(entity, LocalDate.parse(value));
        } else if (field.getType() == String.class) {
            field.set(entity, value);
        } else {
            throw new ORMException("Unsupported type " + field.getType());
        }

        return entity;
    }


    private Field getIdColumn(Class<?> clazz) {
        return Arrays.stream(clazz.getDeclaredFields())
                .filter(f -> f.isAnnotationPresent(Id.class))
                .findFirst()
                .orElseThrow(() -> new UnsupportedOperationException(ID_COLUMN_MISSING_MASSAGE));
    }

    private String getTableName(Class<?> aClass) {
        final Entity[] annotationsByType = aClass.getAnnotationsByType(Entity.class);

        if (annotationsByType.length == 0) throw new UnsupportedOperationException(CLASS_MUST_BE_ENTITY_MESSAGE);

        return annotationsByType[0].name();


        //---------------------Bankin-----------------
        //        Entity annotation = clazz.getAnnotation(Entity.class);
//
//        if (annotation == null) {
//            throw new ORMException("Provided class does not have Entity annotation");
//        }
//
//        return annotation.name();
    }

    private boolean doInsert(E entity) throws SQLException {
        final String tableName = getTableName(entity.getClass());

        final List<KeyValuePair> keyValuePairs = getKeyValuePairs(entity);

        final String fields = keyValuePairs.stream().map(KeyValuePair::key).collect(Collectors.joining(","));
        final String values = keyValuePairs.stream().map(KeyValuePair::value).collect(Collectors.joining(","));

        final String insertQuery = String.format(INSERT_QUERY_FORMAT, tableName, fields, values);

        return connection.prepareStatement(insertQuery).execute();
    }


    private List<KeyValuePair> getKeyValuePairs(E entity) {
        final Class<?> aClass = entity.getClass();

        return Arrays.stream(aClass.getDeclaredFields())
                .filter(f -> !f.isAnnotationPresent(Id.class) && f.isAnnotationPresent(Column.class))
                .map(f -> new KeyValuePair(f.getAnnotationsByType(Column.class)[0].name(),
                        mapFieldsToGivenType(f, entity)))
                .collect(Collectors.toList());
    }

    private String mapFieldsToGivenType(Field field, E entity) {
        field.setAccessible(true);

        Object o = null;

        try {
            o = field.get(entity);
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        }

        return o instanceof String || o instanceof LocalDate
                ? "'" + o + "'"
                : Objects.requireNonNull(o).toString();
    }

    private record KeyValuePair(String key, String value) {

    }
}

