// variables that will be used

var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessesMade = [];
var userWins = 0;
var userLosses = 0;
var guessesLeft = 9;



// Checking all the variables in the console

console.log("The computer guess is: " + computerGuess + " The guesses made are: " + guessesMade + " The user wins: " + userWins + " The user losses: " + userLosses + " The number of guesses left: " + guessesLeft)



// The function that randomly selects the letter from the start

var computerGuess = computerChoice[Math.floor(Math.random()*computerChoice.length)];
console.log(computerGuess)


// This function is run whenever the user presses a key

document.onkeyup = function(event) {

// Determines the key the user pressed   
    var userGuess = event.key;


// Fills the guesses made array
    if (computerChoice.indexOf(userGuess) >= 0 && computerChoice.indexOf(userGuess) <= computerChoice.length) {
        guessesMade.push(userGuess);
        guessesLeft--;
    }
// Determines if the user selection is a valid character

    if (computerChoice.indexOf(userGuess) < 0) {
        alert("Please choose a valid letter key!")
    }


// What happens if the user guesses correctly

    if (computerChoice.indexOf(userGuess) === computerChoice.indexOf(computerGuess)) {
        userWins++;
        guessesLeft = 9;
        guessesMade = [];
        computerGuess = computerChoice[Math.floor(Math.random()*computerChoice.length)];

    }

// If the guesses left reaches zero

    if (guessesLeft === 0) {
        userLosses++;
        guessesLeft = 9;
        guessesMade = [];
        computerGuess = computerChoice[Math.floor(Math.random()*computerChoice.length)];

    }


// Creating the variable to hold HTML

    var html = 
        "<p>Guess what letter I'm thinking of</p>" +
        "<p>Wins: " + userWins + "</p>" + 
        "<p>Losses: " + userLosses + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Your guesses so far: " + guessesMade + "</p>"


// Linking the html on the page

    document.querySelector("#game").innerHTML = html;
}







