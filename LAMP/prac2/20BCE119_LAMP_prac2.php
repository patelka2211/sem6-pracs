<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prac 2</title>
</head>

<body>
    <h1>Harshad number</h1>
    <?php

    $num = 156;
    $rem = $sum = 0;

    //Make a copy of num and store it in variable n  
    $n = $num;

    //Calculates sum of digits  
    while ($num > 0) {
        $rem = $num % 10;
        $sum = $sum + $rem;
        $num = intval($num / 10);
    }

    //Checks whether number is divisible by sum of digits  
    if ($n % $sum == 0)
        print($n . " is a harshad number");
    else
        print($n . " is not a harshad number");
    ?>
</body>

</html>