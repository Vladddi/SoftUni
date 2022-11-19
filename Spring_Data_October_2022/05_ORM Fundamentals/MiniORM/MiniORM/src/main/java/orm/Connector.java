package orm;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class Connector {
    private static Connection connection;
    private static final String JDBC_URL = "jdbc:mysql://localhost:3306/";
    private static final String USER_KEY = "user";
    private static final String PASSWORD_KEY = "password";
    private static final String PARAMETERS_FOR_THE_DATABASE =
            "?allowPublicKeyRetrieval=true&useSSL=false&createDatabaseIfNotExist=true&serverTimezone=UTC";


    private static final String USERNAME = "root";
    private static final String PASSWORD = "VladddiMySQL123*";
    private static final String DATABASE_NAME = "soft_uni";

    private Connector() {
    }

    public static void createConnection() throws SQLException {
        if (connection != null) return;

        Properties props = new Properties();
        props.setProperty(USER_KEY, USERNAME);
        props.setProperty(PASSWORD_KEY, PASSWORD);


        connection = DriverManager.getConnection(JDBC_URL + DATABASE_NAME + PARAMETERS_FOR_THE_DATABASE, props);
    }

    public static Connection getConnection() throws SQLException {
        createConnection();
        return connection;
    }
}
