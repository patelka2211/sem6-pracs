Date: **7-2-2023**

Roll no. and Name: **20BCE119 Kartavya Patel**

Course code and Name: **2CSDE69 LAMP**

Practical No: **2**

Task

1.  Check if the given number is Harshad number or not.
1.  Check if the given number is Special number or not.
1.  Check if the given number is Kaprekar number or not.
1.  Check if the given number is Automorphic number or not.

```php
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prac 2</title>
</head>

<body>
    <?php
    // Harshad Number
    echo "<h1>Practical 2A: Harshad Number</h1>";
    $num = 156;
    $rem = $sum = 0;
    $n = $num;

    while ($num > 0) {
        $rem = $num % 10;
        $sum = $sum + $rem;
        $num = intval($num / 10);
    }

    if ($n % $sum == 0)
        echo "$n is a Harshad number as it is divisible by $sum.";
    else
        echo "$n is not a Harshad number as it is not divisible by $sum.";

    // ------------------------------------------------------------------------------------------

    // Special Number
    echo "<h1>Practical 2B: Special Number</h1>";
    $num = 59;
    $rem = $sum = 0;
    $mul = 1;
    $n = $num;

    while ($num > 0) {
        $rem = $num % 10;
        $sum +=  $rem;
        $mul *=  $rem;
        $num = intval($num / 10);
    }

    if ($mul + $sum === $n)
        echo "$n is a special number because $mul+$sum=$n.";
    else
        echo "$n is not a special number because $mul+$sum!=$n.";

    // ------------------------------------------------------------------------------------------

    // Kaprekar Number
    echo "<h1>Practical 2C: Kaprekar Number</h1>";
    $num = 297;
    $square = (string)($num ** 2);

    for ($index = 0; $index < strlen($square); $index++) {
        $left_number = (substr($square, 0, $index + 1));
        $right_number = (substr($square, $index + 1, strlen($square)));

        if (intval($left_number) + intval($right_number) === $num) {
            echo "$n is Kaprekar number because $left_number+$right_number=$num.";
            break;
        } else {
            continue;
        }
    }

    // ------------------------------------------------------------------------------------------

    // Automorphic Number
    echo "<h1>Practical 2D: Automorphic Number</h1>";
    $num = (string)25;
    $square = (string)($num ** 2);

    if (substr($square, strlen($square) - strlen($num), strlen($square)) === $num) {
        echo "$num is Automorphic number as last " . strlen($num) . " character[s] of $square is/are $num.";
    } else {
        echo "$num is not Automorphic number as last " . strlen($num) . " character[s] of $square is/are not $num.";
    }
    echo "<br><br>";


    // ------------------------------------------------------------------------------------------

    // GLOBALS Array
    echo "<h1>GLOBALS Arrays</h1>";

    function globals_test()
    {
        $test_var = "This is local variable";
        echo '$test_var in global scope: ' . $GLOBALS["test_var"] . "<br>";
        echo '$test_var in current scope: ' . $test_var . "<br>";
    }

    $test_var = "This is global variable";
    globals_test();
    echo "<br><br>";

    // ------------------------------------------------------------------------------------------

    // _SERVER Array
    echo "<h1>_SERVER Arrays</h1>";

    echo "php_self: " . $_SERVER['PHP_SELF'] . "<br>";
    echo "server_name: " . $_SERVER['SERVER_NAME'] . "<br>";
    echo "http_host: " . $_SERVER['HTTP_HOST'] . "<br>";
    echo "http_referer: " . $_SERVER['HTTP_REFERER'] . "<br>";
    echo "http_user_agent: " . $_SERVER['HTTP_USER_AGENT'] . "<br>";
    echo "script_name" .  $_SERVER['SCRIPT_NAME'] . "<br>";
    echo "SERVER_SOFTWARE: " . $_SERVER['SERVER_SOFTWARE'] . "<br>";

    ?>

</body>

</html>
```

## Output

![](/Users/kp/Documents/GitHub/sem6-pracs/LAMP/prac2/images/prac2out.png)
