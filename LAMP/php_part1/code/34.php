<!DOCTYPE html>
<html>

<body>

	<?php
	echo "Example 34-1: Sort Array in Ascending Order - sort()<br>";
	$cars = array("Volvo", "BMW", "Toyota");
	sort($cars);
	sdisplay($cars);
	$numbers = array(4, 6, 2, 22, 11);
	sort($numbers);
	ndisplay($numbers);

	echo "Example 34-2: Sort Array in Descending Order - rsort()<br>";
	$cars = array("Volvo", "BMW", "Toyota");
	rsort($cars);
	sdisplay($cars);
	$numbers = array(4, 6, 2, 22, 11);
	rsort($numbers);
	ndisplay($numbers);

	echo "Example 34-3: Sort Array (Ascending Order), According to Value - asort()<br>";
	$age = array("Peter" => "35", "Ben" => "37", "Joe" => "43");
	asort($age);
	foreach ($age as $x => $x_value) {
		echo "Key=" . $x . ", Value=" . $x_value;
		echo "<br>";
	}

	echo "Example 34-4: Sort Array (Ascending Order), According to Key - ksort()<br>";
	$age = array("Peter" => "35", "Ben" => "37", "Joe" => "43");
	ksort($age);
	foreach ($age as $x => $x_value) {
		echo "Key=" . $x . ", Value=" . $x_value;
		echo "<br>";
	}

	echo "Example 34-5: Sort Array (Descending Order), According to Value - arsort()<br>";
	$age = array("Peter" => "35", "Ben" => "37", "Joe" => "43");
	arsort($age);
	foreach ($age as $x => $x_value) {
		echo "Key=" . $x . ", Value=" . $x_value;
		echo "<br>";
	}

	echo "Example 34-6: Sort Array (Descending Order), According to Key - krsort()<br>";
	$age = array("Peter" => "35", "Ben" => "37", "Joe" => "43");
	krsort($age);
	foreach ($age as $x => $x_value) {
		echo "Key=" . $x . ", Value=" . $x_value;
		echo "<br>";
	}

	function sdisplay(&$cars)
	{
		echo "<b>Strings</b><br>";
		$clength = count($cars);
		for ($x = 0; $x < $clength; $x++) {
			echo $cars[$x];
			echo "<br>";
		}
	}
	function ndisplay(&$numbers)
	{
		echo "<b>numbers</b><br>";
		$arrlength = count($numbers);
		for ($x = 0; $x < $arrlength; $x++) {
			echo $numbers[$x];
			echo "<br>";
		}
	}
	?>

</body>

</html>