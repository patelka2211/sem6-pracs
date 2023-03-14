/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package sem6.aj.prac3;

/**
 *
 * @author kp
 */

import java.sql.*;
//import java.sql.Connection;
//import java.sql.DriverManager;
//import java.sql.SQLException;
//import java.sql.Statement;
//import java.sql.ResultSet;

public class Prac3 {

    static String db = "aj_prac3",
            url = "jdbc:mysql://localhost:3306/" + db,
            user = "root",
            password = "";

    void createEntry() {

    }

    public static void main(String[] args) {

        // try {
        // Connection conn = DriverManager.getConnection(url, user, password);
        // // use the connection object to interact with the database
        // System.out.println("Connected");
        // } catch (SQLException e) {
        // System.out.println(e.getMessage());
        // }

        // String query = "SELECT table_name FROM information_schema.tables WHERE
        // table_schema = '" + db + "'";

        // try {
        // // Create a connection to the MySQL database
        // Connection conn = DriverManager.getConnection(url, user, password);

        // // Create a statement object to execute the SQL query
        // Statement stmt = conn.createStatement();

        // // Execute the SQL query and retrieve the results
        // ResultSet rs = stmt.executeQuery(query);

        // // Loop through the results and print the table names
        // while (rs.next()) {
        // String tableName = rs.getString("table_name");
        // System.out.println(tableName);
        // }

        // // Close the result set, statement, and connection
        // rs.close();
        // stmt.close();
        // conn.close();

        // } catch (SQLException e) {
        // e.printStackTrace();
        // }

        // // SQL statement to create a new table
        // String createTableSQL = "CREATE TABLE users (" +
        // "id INT PRIMARY KEY AUTO_INCREMENT," +
        // "name VARCHAR(50) NOT NULL," +
        // "email VARCHAR(50) NOT NULL UNIQUE" +
        // ")";

        // try {
        // // Create a connection to the MySQL database
        // Connection conn = DriverManager.getConnection(url, user, password);

        // // Create a statement object to execute the SQL statement
        // Statement stmt = conn.createStatement();

        // // Execute the SQL statement to create the new table
        // stmt.executeUpdate(createTableSQL);

        // // Close the statement and connection
        // stmt.close();
        // conn.close();

        // System.out.println("Table created successfully!");

        // } catch (SQLException e) {
        // e.printStackTrace();
        // }
    }
}
