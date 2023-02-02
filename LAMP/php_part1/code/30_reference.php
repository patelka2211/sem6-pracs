<!DOCTYPE html>
<html>

<body>
    <?php
    function addSix(&$num)
    {
        $num += 6;
    }
    $orignum = 10;
    addSix($orignum);
    echo "Original Value is $orignum<br />";
    ?>

</body>

</html>