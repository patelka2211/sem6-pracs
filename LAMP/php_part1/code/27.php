<!DOCTYPE html>
<html>

<body>

  <?php
  echo "Example 27-1: for loop <br>";
  for ($x = 0; $x <= 3; $x++) {
    echo "The number is: $x <br>";
  }

  echo "Example 27-2: foreach loop <br>";
  $colors = array("red", "green", "blue", "yellow");

  foreach ($colors as $value) {
    echo "$value <br>";
  }
  ?>

</body>

</html>