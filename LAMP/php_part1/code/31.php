<!DOCTYPE html>
<html>

<body>

    <?php
    echo "Example 31-1: Basic array<br>";
    $cars = array("Volvo", "BMW", "Toyota");
    echo "I like " . $cars[0] . ", " . $cars[1] . " and " . $cars[2] . ".";

    echo "<br><br>Example 31-2: The count() Function <br> ";
    $cars = array("Volvo", "BMW", "Toyota");
    $noOfElements = count($cars);
    echo $noOfElements;

    echo "<br><br>Example 31-3: Loop Through an Indexed Array <br> ";
    $cars = array("Volvo", "BMW", "Toyota");
    $arrlength = count($cars);

    for ($x = 0; $x < $arrlength; $x++) {
        echo $cars[$x];
        echo "<br>";
    }

    ?>

</body>

</html>