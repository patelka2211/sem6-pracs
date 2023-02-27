package lab.prac2;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import java.util.*;

class GUI_p2a extends JFrame {
    JButton[] buttons;
    JLabel l;
    int closeCount;

    GUI_p2a() {
        setVisible(true);
        setDefaultCloseOperation(3);
        setSize(400, 600);
        setLocationRelativeTo(null);
        setLayout(new FlowLayout());
        setTitle("Practical 2a");

        closeCount = 0;
        Random rand = new Random();

        buttons = new JButton[4];
        buttons[0] = new JButton("Click here");
        for (int i = 0; i < 3; i++) {
            buttons[i + 1] = new JButton("Not here");
        }

        l = new JLabel();

        l.setText("Your message will be displayed here");

        for (int i = 0; i < 4; i++) {
            add(buttons[i]);
        }
        add(l);

        buttons[0].addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent ae) {
                if (buttons[0].getText().equals("Click here")) {
                    closeCount++;
                    if (closeCount == 10) {
                        System.exit(0);
                    }
                    l.setText("Good job. Do it again");
                    int random = Math.abs(rand.nextInt()) % 4;
                    buttons[0].setText("Not here");
                    buttons[random].setText("Click here");
                } else {
                    l.setText("Wrong, try again");
                }

            }
        });

        buttons[1].addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent ae) {
                if (buttons[1].getText().equals("Click here")) {
                    closeCount++;
                    if (closeCount == 10) {
                        System.exit(0);
                    }
                    l.setText("Good job. Do it again");
                    int random = Math.abs(rand.nextInt()) % 4;
                    buttons[1].setText("Not here");
                    buttons[random].setText("Click here");
                } else {
                    l.setText("Wrong, try again");
                }

            }
        });

        buttons[2].addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent ae) {
                if (buttons[2].getText().equals("Click here")) {
                    closeCount++;
                    if (closeCount == 10) {
                        System.exit(0);
                    }
                    l.setText("Good job. Do it again");
                    int random = Math.abs(rand.nextInt()) % 4;
                    buttons[2].setText("Not here");
                    buttons[random].setText("Click here");
                } else {
                    l.setText("Wrong, try again");
                }

            }
        });

        buttons[3].addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent ae) {
                if (buttons[3].getText().equals("Click here")) {
                    closeCount++;
                    if (closeCount == 10) {
                        System.exit(0);
                    }
                    l.setText("Good job. Do it again");
                    int random = Math.abs(rand.nextInt()) % 4;
                    buttons[3].setText("Not here");
                    buttons[random].setText("Click here");
                } else {
                    l.setText("Wrong, try again");
                }

            }
        });

    }
}

public class prac2a {
    public static void main(String[] args) {
        new GUI_p2a();
    }
}