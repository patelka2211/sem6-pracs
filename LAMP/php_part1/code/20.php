<!DOCTYPE html>
<html>

<body>

    <?php

    $x = 100;
    $y = 50;

    echo "Logical And operator ==> ";
    if ($x == 100 and $y == 51) {
        echo "Hello world!";
    }
    echo "<br>";

    echo "Logical OR operator ==> ";
    if ($x == 100 or $y == 45) {
        echo "Hello world!";
    }

    echo "<br>";
    echo "Logical xor operator ==> ";
    if ($x == 100 xor $y == 80) {
        echo "Hello world!";
    }

    echo "<br>";
    echo "Logical And operator ==> ";
    if ($x == 100 && $y == 50) {
        echo "Hello world!";
    }
    echo "<br>";

    echo "Logical OR operator ==> ";
    if ($x == 100 || $y == 45) {
        echo "Hello world!";
    }

    echo "<br>";
    echo "Logical Not operator ==> ";
    if (!($x == 90)) {
        echo "Hello world!";
    }


    ?>

</body>

</html>