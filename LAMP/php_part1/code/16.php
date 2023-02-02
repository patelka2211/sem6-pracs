<!DOCTYPE html>
<html>

<body>

    Example 16-1 : constant with a case-sensitive name
    <br>
    <?php
    // case-sensitive constant name
    define("GREETING", "Welcome to W3Schools.com!");
    echo GREETING;
    ?>


    <br><br>
    Example 16-2 : constant with a case-insensitive name
    <br>
    <?php
    // case-insensitive constant name
    define("GREETING1", "Welcome to W3Schools.com!", true);
    echo greeting1;
    ?>


</body>

</html>