<!DOCTYPE html>
<html>

<body>

    Example 13-1 : Display Text
    <br>
    <?php
    print "<h2>PHP is Fun!</h2>";
    print "Hello world!<br>";
    print "I'm about to learn PHP!";
    ?>

    <br><br><br>
    Example 13-2 : Display Variables
    <br>
    <?php
    $txt1 = "Learn PHP";
    $txt2 = "W3Schools.com";
    $x = 5;
    $y = 4;

    print "<h2>" . $txt1 . "</h2>";
    print "Study PHP at " . $txt2 . "<br>";
    print $x + $y;

    ?>

</body>

</html>