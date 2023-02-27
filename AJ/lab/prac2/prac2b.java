package lab.prac2;

import java.awt.*;
import javax.swing.*;
import java.awt.event.*;
import java.util.Calendar;

class GUI_p2b extends JFrame implements ActionListener {

    JLabel j;
    JButton lapButton;
    JLabel lapLabel;
    long start;
    int lapCount = 1;

    public GUI_p2b() {
        setTitle("Practical 2b");
        setLocationRelativeTo(null);
        setSize(300, 400);
        setLayout(new FlowLayout());
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JButton startButton = new JButton("Start");
        JButton stopButton = new JButton("Stop");

        startButton.addActionListener(this);
        stopButton.addActionListener(this);

        j = new JLabel("Press start to begin start stopwatch.");
        add(startButton);
        add(stopButton);
        add(j);

        lapButton = new JButton("Lap");
        add(lapButton);
        lapButton.addActionListener(this);

        setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        Calendar cal = Calendar.getInstance();

        if (e.getActionCommand().equals("Start")) {
            start = cal.getTimeInMillis();
            j.setText("     Stopwatch is running....     ");

        } else if (e.getActionCommand().equals("Lap")) {
            long time = (cal.getTimeInMillis() - start) / 1000;
            long seconds = time % 60;
            long minute = time / 60;
            long hour = minute / 60;

            JLabel temp = (new JLabel(("      Lap " + lapCount + "   :   " + String.format("%02d", hour) + ":"
                    + String.format("%02d", minute) + ":" + String.format("%02d", seconds) + "     ")));
            lapCount++;
            add(temp);
        } else if (e.getActionCommand().equals("Stop")) {
            long time = (cal.getTimeInMillis() - start) / 1000;
            long seconds = time % 60;
            long minute = time / 60;
            long hour = minute / 60;
            j.setText("     Elapsed time is " + String.format("%02d", hour) + ":" + String.format("%02d", minute) + ":"
                    + String.format("%02d", seconds) + "     ");

        }
    }

}

public class prac2b {

    public static void main(String args[]) {
        new GUI_p2b();
    }
}