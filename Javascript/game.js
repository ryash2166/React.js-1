function guessGame() {
    guess:
            var number = Math.floor(Math.random() * 11);
            // document.write(number);
            number = Math.floor(Math.SQRT2)
            var guess;// = prompt("Guess a number: ");
            var text = 'Guess a number:';
            guess = prompt(text);
            if (number == guess) {
                document.write("Good Job!");
                return true;
            } else {
            if (number < guess) {
                text = "You've guessed too low!";
            } else {
                text = "You've guessed too high!";
            }
               guess;
            }
}
        guessGame();

