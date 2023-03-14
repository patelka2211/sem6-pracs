import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.sql.*;
import javax.swing.*;
import javax.swing.table.DefaultTableModel;

class GUI extends JFrame {
    JLabel usernameLabel, passwordLabel;
    JTextField usernameTextField, passwordTextField;
    JTable table;
    DefaultTableModel tableModel = new DefaultTableModel();
    JButton newButton, updateButton, deleteButton;
    JComboBox combobox;
    JButton deleteComboBoxButton;

    GUI() {
        // visible aur saab karo
        setVisible(true);
        setSize(520, 800);
        setLocationRelativeTo(null);
        setLayout(new FlowLayout());
        setDefaultCloseOperation(3);

        // input from the user
        usernameLabel = new JLabel("Username: ");
        passwordLabel = new JLabel("Password: ");

        usernameTextField = new JTextField(15);
        passwordTextField = new JTextField(15);

        JPanel p1 = new JPanel();
        p1.add(usernameLabel);
        p1.add(usernameTextField);
        p1.add(passwordLabel);
        p1.add(passwordTextField);
        p1.setSize(600, 20);

        add(p1);

        // buttons
        newButton = new JButton("New");
        updateButton = new JButton("Update");
        deleteButton = new JButton("Delete");

        JPanel p2 = new JPanel();

        p2.add(newButton);
        p2.add(updateButton);
        p2.add(deleteButton);

        add(p2);

        // table aur uski baate
        String headings[] = { "Username", "Password" };
        table = new JTable();
        tableModel = new DefaultTableModel();

        tableModel.setColumnIdentifiers(headings);
        table.setModel(tableModel);

        JScrollPane tableScrollPane = new JScrollPane(table);

        JPanel p3 = new JPanel();
        p3.add(tableScrollPane);

        add(p3);

        // dropdown aur button
        combobox = new JComboBox();
        deleteComboBoxButton = new JButton("Delete");

        // connect to the database
        try {
            connectToDB();
        } catch (Exception e) {
            System.out.println(e);
        }

        JPanel p4 = new JPanel();
        p4.add(combobox);
        p4.add(deleteComboBoxButton);

        add(p4);

        newButton.addActionListener(ae -> {
            String t[] = new String[2];
            t[0] = usernameTextField.getText();
            t[1] = passwordTextField.getText();
            if (t[1].equals("")) {
                JOptionPane.showMessageDialog(this, "Password must not be empty.", "Please enter password",
                        JOptionPane.INFORMATION_MESSAGE);
                return;
            }
            for (int i = 0; i < table.getRowCount(); i++) {
                if (table.getValueAt(i, 0).equals(t[0])) {
                    return;
                }
            }
            // add to table and database
            tableModel.addRow(t);
            combobox.addItem(t[0]);

            // database ki line

        });

        deleteButton.addActionListener(ae -> {
            String t[] = new String[2];
            t[0] = usernameTextField.getText();
            t[1] = passwordTextField.getText();

            if (t[0].equals("")) {
                int lastIndex = table.getRowCount() - 1;
                tableModel.removeRow(lastIndex);
                // String temp = tableModel.getValueAt(lastIndex, 0).toString();
                combobox.removeItemAt(lastIndex);

                // database ki line

            } else {
                for (int i = 0; i < table.getRowCount(); i++) {
                    if (table.getValueAt(i, 0).equals(t[0])) {
                        tableModel.removeRow(i);
                        combobox.removeItemAt(i);
                        // database ki line

                        return;
                    }
                }
            }
        });

        updateButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent ae) {
                String t[] = new String[2];
                t[0] = usernameTextField.getText();
                t[1] = passwordTextField.getText();

                for (int i = 0; i < table.getRowCount(); i++) {
                    if (table.getValueAt(i, 0).equals(t[0])) {
                        tableModel.insertRow(i, t);
                        tableModel.removeRow(i + 1);

                        // database ki line

                        return;
                    }
                }
            }
        });

    }

    public static void connectToDB() throws ClassNotFoundException {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/Demo", "root", "");
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("select empno,ename,job from emp");
            while (rs.next()) {

            }
            con.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}

public class java_db {
    public static void main(String args[]) {
        new GUI();
    }
}