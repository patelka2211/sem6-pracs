<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practical 4B</title>
</head>

<body>
    <form method="post">
        <label>Enter the number of elements to be stored in the array:</label>
        <input type="number" name="n"><br><br>
        <?php
        if (isset($_POST['submit'])) {
            $n = $_POST['n'];
            $arr = array();
            for ($i = 0; $i < $n; $i++) {
                echo "Element - " . $i . ": ";
                $arr[$i] = $_POST['elem' . $i];
                echo "<input type='number' name='elem" . $i . "' value='" . $arr[$i] . "'><br>";
            }
            $count = 0;
            $dupes = array();
            for ($i = 0; $i < $n; $i++) {
                for ($j = $i + 1; $j < $n; $j++) {
                    if ($arr[$i] == $arr[$j]) {
                        $dupes[$count] = $arr[$i];
                        $count++;
                        break;
                    }
                }
            }
            echo "<br>Total number of duplicate elements found in the array is: " . $count;
            echo "<br>Duplicate elements:";
            $dupes = array_unique($dupes);
            foreach ($dupes as $dupe) {
                echo $dupe . ",";
            }
        }
        ?>
        <br><br>
        <input type="submit" name="submit" value="Submit">
    </form>
</body>

</html>