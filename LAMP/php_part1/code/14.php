<!DOCTYPE html>
<html>

<body>

    Example 14-1 : String Data Type
    <br>
    <?php
    $x = "Hello world!";
    $y = 'Hello world!';

    echo $x;
    echo "<br>";
    echo $y;
    ?>

    <br><br>
    Example 14-2 : Integer Data Type
    <br>
    <?php
    $x = 5985;
    var_dump($x);
    ?>

    <br><br>
    Example 14-3 : Float Data Type
    <br>
    <?php
    $x = 10.365;
    var_dump($x);
    ?>

    <br><br>
    Example 14-4 : Boolean Data Type
    <br>
    <?php
    $x = true;
    var_dump($x);
    ?>


    <br><br>
    Example 14-5 : Array Data Type
    <br>
    <?php
    $cars = array("Volvo", "BMW", "Toyota");
    var_dump($cars);
    ?>

    <br><br>
    Example 14-6 : Object Data Type
    <br>
    <?php
    class Car
    {
        function Car()
        {
            $this->model = "VW";
        }
    }
    // create an object
    $herbie = new Car();

    // show object properties
    echo $herbie->model;
    ?>

    <br><br>
    Example 14-7 : NULL value
    <br>
    <?php
    $x = "Hello world!";
    $x = null;
    var_dump($x);
    ?>

</body>

</html>