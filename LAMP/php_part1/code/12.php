<!DOCTYPE html>
<html>

<body>

    Example 12-1 : Display Text
    <br>
    <?php
    echo "<h2>PHP is Fun!</h2>";
    echo "Hello world!<br>";
    echo "I'm about to learn PHP!<br>";
    echo "This ", "string ", "was ", "made ", "with multiple parameters.";

    ?>


    <br><br><br>
    Example 12-2 : Display Variables
    <br>
    <?php
    $txt1 = "Learn PHP";
    $txt2 = "W3Schools.com";
    $x = 5;
    $y = 4;

    echo "<h2>" . $txt1 . "</h2>";
    echo "Study PHP at " . $txt2 . "<br>";
    echo $x + $y;
    ?>

</body>

</html>