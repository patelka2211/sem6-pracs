<!DOCTYPE html>
<html>

<body>

    <?php
    echo "Example 29-1:<br>";
    function familyName($fname)
    {
        echo "$fname Refsnes.<br>";
    }

    familyName("Jani");
    familyName("Hege");
    familyName("Stale");
    familyName("Kai Jim");
    familyName("Borge");


    echo "<br>Example 29-2:<br> ";
    function familyNameTwo($fname, $year)
    {
        echo "$fname Refsnes. Born in $year <br>";
    }

    familyNameTwo("Hege", "1975");
    familyNameTwo("Stale", "1978");
    familyNameTwo("Kai Jim", "1983");
    ?>

</body>

</html>