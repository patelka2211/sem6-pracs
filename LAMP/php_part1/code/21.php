<!DOCTYPE html>
<html>

<body>

    <?php
    echo "<br> Concatenation ==> <br>";
    $txt1 = "Hello";
    $txt2 = " world!";
    echo $txt1 . $txt2;


    echo "<br>Concatenation assignment ==> <br>";
    $txt1 = "Hello";
    $txt2 = " world!";
    $txt1 .= $txt2;
    echo $txt1;
    ?>

</body>

</html>