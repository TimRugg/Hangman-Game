//var counterWins = 2;
//var counterGuessesRemaining = 5;
var tempCorrectGuessesDisplayed = "_ A I _ D _ _ _";
var tempIncorrectGuessesDisplayed = "O L M Z E F U";


//	Start and set up variables
//	allowedCharacters[] // array of characters allowed
var allowedCharacters = "abcdefghijklmnopqrstuvwxyz";
//	listOfWords[] // array of words to play
var listOfWords = ["player","guesses","wins","losses","hangman","letter","character","number"];
//	counterGamesPlayed = 0 // count the games played for current list
var counterGamesPlayed = 0;
var wordToGuess = listOfWords[counterGamesPlayed];
//	askToPlayAnotherIndicator = false // this variable set to true when game is over and question displayed to play another press space bar
//	validateSelectedKey[] = allowedCharacters[] // 1st time set list to check against master list
/////////////var function(validateSelectedKey(selectedKey)) {allowedCharacters.indexOf(selectedKey)} 
//return value true if key selected is valid
// 	letterFoundIndicator = false // this variable set to true if key pressed is in targetWord
//	counterDisplayedLetters = 0 // count number of letters displayed - use to indicate game won
var counterDisplayedLetters = 0;
//	counterIncorrectGuesses = 0 // count incorrect guesses
var counterIncorrectGuesses = 0; 
//	totalIncorrectGuessesAllowed = 12 // compare against counterIncorrect Guess - use to lose game
var totalIncorrectGuessesAllowed = 12;
//	string to display incorrect guesses
var incorrectGuessesDisplayed=[];
//	counterGamesWon = 0 // displays number of games won
var counterGamesWon = 0;
//	counterGamesLost = 0 // displays number of games lost
var counterGamesLost = 0;
//
function logToConsole(){
	console.log("counterGamesPlayed= " + counterGamesPlayed);
	console.log("counterDisplayedLetters= " + counterDisplayedLetters);
	console.log("counterIncorrectGuesses= " + counterIncorrectGuesses);
	console.log("totalIncorrectGuessesAllowed= " + totalIncorrectGuessesAllowed);
	console.log("counterGamesWon= " + counterGamesWon);
	console.log("counterGamesLost= " + counterGamesLost);
	};

// Refresh HTML
document.getElementById("gameMessage").innerHTML = "Press any key to get started!";
document.getElementById("gameScoreWins").innerHTML = "Wins: " + counterGamesWon;
document.getElementById("gameCorrectGuessesDisplayed").innerHTML = "Current Word: " + tempCorrectGuessesDisplayed;
document.getElementById("gameNumberOfGuessesRemaining").innerHTML = "Number of  Guesses Remaining: " + (totalIncorrectGuessesAllowed - counterIncorrectGuesses);
document.getElementById("gameIncorrectGuessedDisplayed").innerHTML = "Incorrect Guesses: " + incorrectGuessesDisplayed;

// 	Listen for key
document.onkeyup = function(event) {
// 	capture key press
	var userKeyPressed = event.key.toLowerCase();
	console.log("key pressed= " + userKeyPressed);
	console.log("allowed letters " + allowedCharacters);
	if (allowedCharacters.indexOf(userKeyPressed) < 0) 
		{
		//either a previously guessed letter was selected or an invalid character was selected 
		document.getElementById("gameMessage").innerHTML = "Be sure to select a new letter from A to Z";
		}
	else if (wordToGuess.indexOf(userKeyPressed) < 0)
		{
		//letter selected was not in the word to guess  
		document.getElementById("gameMessage").innerHTML = "Try again!";
		allowedCharacters = allowedCharacters.replace(userKeyPressed," ");
		incorrectGuessesDisplayed.push(userKeyPressed); 
		document.getElementById("gameIncorrectGuessedDisplayed").innerHTML = "Incorrect Guesses: " + incorrectGuessesDisplayed;
		counterIncorrectGuesses++
		if (totalIncorrectGuessesAllowed==counterIncorrectGuesses)
			{document.getElementById("gameMessage").innerHTML = "***** GAME OVER *****";}
		}
	else
		{document.getElementById("gameMessage").innerHTML = "Good going!";}
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
//	
//
// CODE SNIPPETS FOR USE
// 	var favTVshows = [];
//  var tvShow;
//  favTVshows.push(tvShow); -->							