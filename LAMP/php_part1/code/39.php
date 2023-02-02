<!DOCTYPE html>
<html>

<body>


    <?php
    $x = array("a" => "red", "b" => "green");
    $y = array("b" => "purple", "c" => "blue", "d" => "yellow");
    print_r($x + $y); // union of $x and $y
    echo "<br/>";

    $x = array("a" => "red", "b" => "green");
    $y = array("b" => "green", "a" => "red");
    //$y = array("c" => "blue", "d" => "yellow");  
    var_dump($x == $y);
    echo "<br/>";

    $x = array("a" => 10, "b" => "green");
    $y = array("a" => "10", "b" => "green");
    var_dump($x === $y);
    echo "<br/>";

    $x = array("a" => "red", "b" => "green");
    $y = array("c" => "blue", "d" => "yellow");
    var_dump($x != $y);
    echo "<br/>";

    $x = array("a" => "red", "b" => "green");
    $y = array("c" => "blue", "d" => "yellow");
    var_dump($x <> $y);
    echo "<br/>";

    $x = array("a" => "red", "b" => "green");
    $y = array("c" => "blue", "d" => "yellow");
    var_dump($x !== $y);
    echo "<br/>";
    ?>
</body>

</html>