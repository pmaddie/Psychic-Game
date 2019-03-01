// define variables //
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var wins = 0;
var losses = 0;
var guessesLeft = 12; 
var guessesSoFar = [];
console.log(computerGuess);
console.log(wins);
console.log(guessesLeft);
console.log(losses);





// Start of the game //
    document.onkeyup = function(event) {
        var userGuess = event.key;
        console.log(userGuess); 
    

        var userGuessLower = userGuess.toLowerCase(); 


// To WIN 
    if (userGuess.indexOf(userGuessLower)!==-1) {
        if (userGuessLower === computerGuess) {
            wins++;
            guessesLeft = 12;
            guessesSoFar = [];
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
          }
        else {
            guessesLeft--;
        }

// TO lose 
    if (guessesLeft === 0) {
        losses++;
// guesses left and guesses so far reset after loss //
        guessesLeft = 12;
// reset guesses so far //
        guessesSoFar = [];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        }
guessesSoFar.push(event.key)


    }
    // ADD TEXT TO HTML PAGE //
var HTML = 
// write strings // 
"<p>Wins: " + wins + "</p>" +
"<p>Losses: " + losses + "</p>" +
"<p>Guesses Left: " + guessesLeft + "</p>" +
"<p>Guesses Use So Far: " + guessesSoFar + "</p>";

document.querySelector("#game").innerHTML = HTML;
    }