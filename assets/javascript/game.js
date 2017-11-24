
//	Start and set up variables
//	allowedCharacters[] // array of characters allowed
var allowedCharacters = "abcdefghijklmnopqrstuvwxyz";
//	listOfWords[] // array of words to play
var listOfWords = ["Player","guesses","wins","losses","hangman","letter","character","number"];
 
//	askToPlayAnotherIndicator = false // this variable set to true when game is over and question displayed to play another press space bar

//	counterDisplayedLetters = 0 // count number of letters displayed - use to indicate game won
var counterDisplayedLetters = 0;
//	counterIncorrectGuesses = 0 // count incorrect guesses
var counterIncorrectGuesses = 0; 
//	totalIncorrectGuessesAllowed = 12 // compare against counterIncorrect Guess - use to lose game
var totalIncorrectGuessesAllowed = 12;
//	string to display incorrect guesses
var incorrectGuessesDisplayed = "";
//	counterGamesWon = 0 // displays number of games won
var counterGamesWon = 0;
//	counterGamesLost = 0 // displays number of games lost
var counterGamesLost = 0;
//	counterGamesPlayed = 0 // count the games played for current list
var counterGamesPlayed = 0;
// pick first word to play
var wordToGuess = listOfWords[counterGamesPlayed];
// transform word to guess into an array
var arrayWordToGuess = wordToGuess.split("");
// start off with word displayed only as underscores
var correctGuessesDisplayed = "_".repeat(wordToGuess.length);
// transform displayed string into an array
var arrayCorrectGuessesDisplayed = correctGuessesDisplayed.split("");
// transform wordToGuess into lower case
var wordToGuessLowerCase = wordToGuess.toLowerCase();

function logToConsole(){
	console.log("counterGamesPlayed= " + counterGamesPlayed);
	console.log("counterDisplayedLetters= " + counterDisplayedLetters);
	console.log("counterIncorrectGuesses= " + counterIncorrectGuesses);
	console.log("totalIncorrectGuessesAllowed= " + totalIncorrectGuessesAllowed);
	console.log("counterGamesWon= " + counterGamesWon);
	console.log("counterGamesLost= " + counterGamesLost);
	console.log("allowed letters " + allowedCharacters);
	console.log("totalCorrectGuessesNeeded "+ wordToGuess.length);
	};

// Refresh HTML
document.getElementById("gameMessage").innerHTML = "Press any key to get started!";
document.getElementById("gameScoreWins").innerHTML = "Wins: " + counterGamesWon;
document.getElementById("gameCorrectGuessesDisplayed").innerHTML = "Current Word: " + correctGuessesDisplayed;
document.getElementById("gameNumberOfGuessesRemaining").innerHTML = "Number of  Guesses Remaining: " + (totalIncorrectGuessesAllowed - counterIncorrectGuesses);
document.getElementById("gameIncorrectGuessedDisplayed").innerHTML = "Incorrect Guesses: " + incorrectGuessesDisplayed;

// 	Listen for key
document.onkeyup = function(event) {
// 	capture key press
	console.log("key pressed= " + userKeyPressed);
	var userKeyPressed = event.key.toLowerCase();
	if (allowedCharacters.indexOf(userKeyPressed) < 0) 
		{
			//either a previously guessed letter was selected or an invalid character was selected 
			document.getElementById("gameMessage").innerHTML = "Be sure to select a new letter from A to Z";
		}
	else if (wordToGuessLowerCase.indexOf(userKeyPressed) < 0)
		{
			//letter selected was not in the word to guess  
			document.getElementById("gameMessage").innerHTML = "Try again!";
			allowedCharacters = allowedCharacters.replace(userKeyPressed," ");
			// incorrectGuessesDisplayed.push(userKeyPressed);
			incorrectGuessesDisplayed=incorrectGuessesDisplayed+userKeyPressed; 
			document.getElementById("gameIncorrectGuessedDisplayed").innerHTML = "Incorrect Guesses: " + incorrectGuessesDisplayed;
			counterIncorrectGuesses++
			if (totalIncorrectGuessesAllowed==counterIncorrectGuesses)
				{
					// LOSE GAME
					document.getElementById("gameMessage").innerHTML = "***** GAME OVER *****";
					counterGamesLost++
					counterGamesPlayed++
				}
		}
	else
		{
			//letter selected is in the word to guess
			document.getElementById("gameMessage").innerHTML = "Good going!";
			allowedCharacters = allowedCharacters.replace(userKeyPressed," ");
			// loop through word to guess replacing underscores with valid letters and counting displayed letters
			correctGuessesDisplayed="";
			for (i=0; i<wordToGuess.length; i++)
			{
				//word to guess has the case as in word list	
			 	if (arrayWordToGuess[i].toLowerCase()==userKeyPressed)
			 	{
			 		arrayCorrectGuessesDisplayed[i]=arrayWordToGuess[i];
			 		counterDisplayedLetters++
			 	}
			 	//rebuild the string displayed on screen
			 	correctGuessesDisplayed = correctGuessesDisplayed + arrayCorrectGuessesDisplayed[i];
			}
			document.getElementById("gameCorrectGuessesDisplayed").innerHTML = "Correct Guesses: " + correctGuessesDisplayed;
			if (counterDisplayedLetters==wordToGuess.length)
			{
				//WIN GAME
				document.getElementById("gameMessage").innerHTML = "***** WIN GAME *****";
				counterGamesWon++
				counterGamesPlayed++
			}
		}
		
logToConsole();
}

//	if space bar is selected check that play another is available > askToPlayAnotherIndicator
//		if true > 
//	 		check that there are words remaining in list
//	 		validateSelectedKey[] = allowedCharacters[] // reset to master list
//	 		targetWord = listOfWords[counterGamesPlayed] // choose next word from listOfWords[] 
//			displayGuessedLetters[] = repeat and store underscores in array length of targetWord
//	 		increment counterGamesPlayed++ 
//		if not new game false > continue checking key pressed
//	  		transform to lower case : userKeyPressed
//			Check user guess against allowed characters 
//				if not found > do nothing continue listening
//				if valid 
//						remove from allowedCharacters[] // this will prevent a previously used letter from being reused
//						check if key pressed is in targetWord 
//							if found set letterFoundIndcator=true
//								loop through targetWord finding occurances of letter pressed
//								replace underscore at index in displayGuessedLetters[]
//								increment counterDisplayedLetters++	
//								loop
//									check if all spaces guessed
//											if true then 'WIN GAME'
//												increment counterGamesWon++	
//						if key is not found in target word
//							increment counterIncorrectGuess++ 
//							if equal to total incorrect guesses allowedCharacters
//								'LOSE GAME'
//									increment counterGamesLost++
