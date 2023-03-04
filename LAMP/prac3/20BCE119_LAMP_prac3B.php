<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practical 3B</title>
</head>

<body>
    <?php
    // Check if the form has been submitted using the POST method
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        // Get the input value from the form and remove any trailing periods
        $input = trim($_POST['input']);
        $input = rtrim($input, '.');
        // Check if the input string is longer than 80 characters
        if (strlen($input) > 80) {
            echo 'String length exceeds 80 characters limit';
        } else {
            // Split the input string into an array of words
            $words = explode(' ', $input);
            // Capitalize the first letter of each word and make the rest lowercase
            foreach ($words as $key => $word) {
                $words[$key] = ucfirst(strtolower($word));
            }
            // Sort the words in descending order of length, then ascending order of alphabetically, ignoring case
            uasort($words, function ($a, $b) {
                if (strlen($a) == strlen($b)) {
                    return strcasecmp($a, $b);
                }
                return strlen($b) - strlen($a);
            });
            // Join the sorted words back into a sentence and add a period at the end
            $sortedSentence = implode(' ', $words) . '.';
            // Display the sorted sentence
            echo $sortedSentence;
        }
    }
    ?>

    <form method="POST">
        <label for="input">Enter a string (maximum 80 characters):</label>
        <input type="text" id="input" name="input" maxlength="80" required>
        <button type="submit">Submit</button>
    </form>
</body>

</html>