<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practical 3A</title>
</head>

<body>
    <?php
    // check if form is submitted
    if (isset($_POST['paragraph'])) {
        $paragraph = $_POST['paragraph'];

        echo "Input paragraph: " . $paragraph;

        // find total number of sentences and words in each sentence
        $sentences = preg_split('/(?<=[.?!])\s+/', $paragraph, -1, PREG_SPLIT_NO_EMPTY);
        $total_sentences = count($sentences);
        $total_words_per_sentence = array_map('str_word_count', $sentences);

        echo "<p>Total sentences: " . $total_sentences . "</p>";
        echo "<p>Total words per sentence: " . implode(", ", $total_words_per_sentence) . "</p>";

        // find total number of characters and occurrence of each character
        $total_characters = strlen($paragraph);
        $char_occurrence = count_chars($paragraph, 1);

        echo "<p>Total characters: " . $total_characters . "</p>";
        echo "<p>Character occurrence:</p>";

        echo "<ul>";
        foreach ($char_occurrence as $char => $count) {
            echo "<li>" . chr($char) . ": " . $count . "</li>";
        }
        echo "</ul>";

        // search a word in the paragraph and print its position
        if (isset($_POST['search_word']) && !empty($_POST['search_word'])) {
            $search_word = $_POST['search_word'];

            $word_position = strpos($paragraph, $search_word);

            if ($word_position !== false) {
                echo "<p>Word found at position " . $word_position . "</p>";
            } else {
                echo "<p>Word not found in paragraph.</p>";
            }
        } elseif (isset($_POST['search_word'])) {
            echo "<p>Search word not provided.</p>";
        }
    }
    ?>

    <form method="post">
        <label for="paragraph">Enter a paragraph:</label><br>
        <textarea id="paragraph" name="paragraph" rows="5" cols="40"></textarea><br>

        <label for="search_word">Enter a word to search:</label><br>
        <input type="text" id="search_word" name="search_word"><br>

        <input type="submit" value="Submit">
    </form>
</body>

</html>