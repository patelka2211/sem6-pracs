<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practical 4A</title>
</head>

<body>
    <form method="post">
        <label for="arr">Enter the array elements separated by commas:</label>
        <input type="text" name="arr" required><br>

        <label for="K">Enter the target sum:</label>
        <input type="number" name="K" required><br>

        <input type="submit" name="submit" value="Find Combinations">
    </form>
    <br>

    <?php
    if (isset($_POST['submit'])) {
        $arr = array_map('intval', explode(",", $_POST['arr']));
        $K = $_POST['K'];

        // check for invalid input
        if (empty($arr)) {
            echo "Error: Array cannot be empty!";
        } else if (!is_numeric($K)) {
            echo "Error: Target sum must be a number!";
        } else {
            $count = 0;
            $combinations = array();

            // loop through all possible combinations of array elements
            for ($i = 0; $i < pow(2, count($arr)); $i++) {
                $subset = array();
                $sum = 0;

                for ($j = 0; $j < count($arr); $j++) {
                    if (($i & (1 << $j)) > 0) {
                        $subset[] = $arr[$j];
                        $sum += $arr[$j];
                    }
                }

                if ($sum == $K) {
                    sort($subset); // sort subset to avoid duplicate pairs

                    if (!in_array($subset, $combinations)) { // check if subset already counted
                        $count++;
                        $combinations[] = $subset;
                    }
                }
            }

            if ($count == 0) {
                echo "No combinations found.";
            } else {
                echo "Number of combinations: " . $count . "<br>";
                echo "Combinations: ";
                foreach ($combinations as $c) {
                    echo "[";
                    for ($i = 0; $i < count($c); $i++) {
                        echo $c[$i];
                        if ($i < count($c) - 1) {
                            echo ",";
                        }
                    }
                    echo "] ";
                }
            }
        }
    }
    ?>
</body>

</html>