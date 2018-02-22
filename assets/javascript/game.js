// variables that will be used

var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessesMade = [];
var userWins = 0;
var userLosses = 0;
var guessesLeft = 9;
var userGuess


// Checking all the variables in the console

console.log("The computer guess is: " + computerGuess + " The guesses made are: " + guessesMade + " The user wins: " + userWins + " The user losses: " + userLosses + " The number of guesses left: " + guessesLeft)
console.log(userGuess)


// The function that randomly selects the letter from the start

var computerGuess = computerChoice[Math.floor(Math.random()*computerChoice.length)];
console.log(computerGuess)


// How to record the user guess

document.onkeyup = function(event) {

    userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    guessesMade.push(userGuess)

    if (guessesMade.indexOf(userGuess) < 0 && computerChoice.indexOf(userGuess) >= 0) {
        guessesMade[guessesMade.length] = userGuess;
// This line lowers the guesses left after each guess
        guessesLeft--;
    }

}
// How to track the user guesses in an array 

     


// What happens if the user wins

    if (computerChoice.indexOf (userGuess) === computerChoice.indexOf(computerGuess)) {
        userWins++;
        guessesLeft = 9;
        guessesMade = [];
    }

// What happens if the user runs out of guesses






