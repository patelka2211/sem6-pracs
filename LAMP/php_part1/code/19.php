<!DOCTYPE html>
<html>

<body>

    <?php
    $x = 100;
    $y = "100";
    echo "$x === $y ==>";
    var_dump($x === $y);
    echo "<br>";
    echo "$x == $y ==>";
    var_dump($x == $y);

    echo "<br>";

    $x = 10;
    $y = 6;

    echo "$x <> $y ==> ";
    var_dump($x <> $y);
    echo "<br>";
    echo "$x != $y ==>";
    var_dump($x != $y);

    ?>

</body>

</html>