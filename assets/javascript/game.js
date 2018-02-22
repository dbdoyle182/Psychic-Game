// variables that will be used

var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessesMade = [];
var userWins = 0;
var userLosses = 0;
var guessesLeft = 9;
var userGuess = null;


// Checking all the variables in the console

console.log("The computer guess is: " + computerGuess + " The guesses made are: " + guessesMade + " The user wins: " + userWins + " The user losses: " + userLosses + " The number of guesses left: " + guessesLeft)



// The function that randomly selects the letter from the start

var computerGuess = computerChoice[Math.floor(Math.random()*computerChoice.length)];
console.log(computerGuess)


// How to record the user guess

document.onkeyup = function(event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


    if (guessesMade.indexOf(userGuess) < 0 && computerChoice.indexOf(userGuess) >= 0) {
        guessesMade[guessesMade.length] = userGuess;
// This line lowers the guesses left after each guess
        guessesLeft--;
    }
}

     







// How to adjust the win count


// How to adjust the guess count


// Displaying the letters that have been guessed



// The function that compares the guessed letter and the predetermined letter


// The function that resets the the guessed letter log