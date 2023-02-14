<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <textarea name="paragraph" id="paragraph-ta" cols="30" rows="10" placeholder="Enter paragraph"></textarea>
        <button type="submit" name="submit">Submit</button>
    </form>

    <?php
    if (isset($_POST['submit'])) {
        $paragraph_text = htmlspecialchars($_POST['paragraph']);
        echo $paragraph_text;

        echo "<br>";
        var_dump(explode('.', $paragraph_text));
        echo '<br>';
        echo str_word_count($paragraph_text);
    }
    ?>
</body>

</html>