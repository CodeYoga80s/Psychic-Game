
  
// possible choices for the computer		
		 var compChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables set to the inital value at the beginning or at the game reset
		 var wins = 0;
		 var losses = 0;
		 var guessTotal = 9;
		 var Guesses = [];

// Beginning of the function that will execute the conditions of the game
// The game will initiate when the user presses any of the alphabet key
		 document.onkeyup = function(event) {

// User guess is set as the key that's pressed
		 	var userGuess = event.key;

// The computer guess is based on the output of the math formulas below and the available choices the computer has within the compChoice variable
		 	var computerGuess = compChoice[Math.floor(Math.random() * compChoice.length)];

// The options available to the user
		 	var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
		 	
// if the position of the choice the user makes is within the "options" array then execute the remainder of the code
			if (options.indexOf(userGuess) > -1) {

// if the user's guess is equal to the computer's guess, then increase the current value of wins by 1.  
// Guess choices, i.e, your choices so far will reset to null/blank and you'll get 9 guesses back for the next game.
				if (userGuess === computerGuess) {
					wins++;
					guessTotal = 9;
					Guesses = [];
				}

// if user and compuer guesses are not equal, the number of guesses available will decrease by 1 and user's choice will be 
// pushed/entered into the empty array; i.e, shown on the screen.
				if (userGuess != computerGuess) {
					guessTotal --;
					Guesses.push(userGuess);
				}

// Checks to see if the number of remaining guesses is 0 and if so then increases the losses by 1 and 
//number of guesses are reset to 9 and choices are cleared
				if (guessTotal === 0) {
                    guessTotal = 9;
				losses++;
				Guesses = [];
				
			}

//Concatenating the results with the descriptions
			var html = 
			"<h1> The Psychic Game </h1>" +
			"<p>Guess what letter I'm thinking of</p>" +
			"<p>Wins: " + wins + "</p>" +
			"<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + guessTotal + "</p>" +
            "<p>Your Guesses so far: " + Guesses + "</p>";

//displaying the results with the descriptions
			document.querySelector("#psychicGame").innerHTML = html;

			
			}
		};
