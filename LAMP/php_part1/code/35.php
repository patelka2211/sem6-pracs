<!DOCTYPE html>
<html>

<body>

    <?php

    echo "php_self: " . $_SERVER['PHP_SELF'];
    echo "<br>";
    echo "server_name: " . $_SERVER['SERVER_NAME'];
    echo "<br>";
    echo "http_host: " . $_SERVER['HTTP_HOST'];
    echo "<br>";
    echo "http_referer: " . $_SERVER['HTTP_REFERER'];
    echo "<br>";
    echo "http_user_agent: " . $_SERVER['HTTP_USER_AGENT'];
    echo "<br>";
    echo "script_name" .  $_SERVER['SCRIPT_NAME'];
    echo "<br>";
    echo "SERVER_SOFTWARE: " . $_SERVER['SERVER_SOFTWARE'];
    echo "<br>";
    ?>

</body>

</html>