import java.sql.*;
import java.util.Properties;

public class p02_Select_Minion_Count {
    public static void main(String[] args) throws SQLException {
        Properties properties = new Properties();
        properties.setProperty("user", "root");
        properties.setProperty("password", "");

        Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/minions_db", properties);

        PreparedStatement statement = connection.prepareStatement(
                "SELECT name, COUNT(DISTINCT mv.minion_id) AS minion_count " +
                        "FROM villains AS v\n" +
                "JOIN minions_villains AS mv ON mv.villain_id = v.id\n" +
                "GROUP BY mv.villain_id\n" +
                "HAVING minion_count > 15\n" +
                "ORDER BY minion_count DESC;");

        ResultSet resultSet = statement.executeQuery();

        while (resultSet.next()) {
            String villainName = resultSet.getString("name");
            int minionCount = resultSet.getInt("minion_count");

            System.out.println(villainName + " " + minionCount);
        }

        connection.close();
    }
}