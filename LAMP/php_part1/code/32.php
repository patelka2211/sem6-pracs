<!DOCTYPE html>
<html>

<body>

    <?php
    echo "Example 32-1: Associative Arrays<br>";
    $age = array("Peter" => "35", "Ben" => "37", "Joe" => "43");
    echo "Peter is " . $age['Peter'] . " years old.";

    echo "<br><br>Example 32-2: Loop Through an Indexed Array <br> ";
    $age = array("Peter" => "35", "Ben" => "37", "Joe" => "43");

    foreach ($age as $x => $x_value) {
        echo "Key=" . $x . ", Value=" . $x_value;
        echo "<br>";
    }


    ?>

</body>

</html>