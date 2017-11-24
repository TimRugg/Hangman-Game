var counterWins = 2;
var counterGuessesRemaining = 5;
var gameCorrectGuessesDisplayed = "_ A I _ D _ _ _";
var gameIncorrectGuessedDisplayed = "O L M Z E F U";
// Refresh HTML
document.getElementById("gameMessage").innerHTML = "Press any key to get started!";
document.getElementById("gameScoreWins").innerHTML = "Wins: " + counterWins;
document.getElementById("gameCorrectGuessesDisplayed").innerHTML = "Current Word: " + gameCorrectGuessesDisplayed;
document.getElementById("gameNumberOfGuessesRemaining").innerHTML = "Number of  Guesses Remaining: " + counterGuessesRemaining;
document.getElementById("gameIncorrectGuessedDisplayed").innerHTML = "Incorrect Guesses: " + gameIncorrectGuessedDisplayed;

//	Start and set up variables
//	allowedCharacters[] // array of lower case characters allowed
//	listOfWords[] // array of words to play
//	counterGamesPlayed = 0 // count the games played for current list
//	askToPlayAnotherIndicator = false // this variable set to true when game is over and question displayed to play another press space bar
//	validateSelectedKey[] = allowedCharacters[] // 1st time set list to check against master list
// 	letterFoundIndicator = false // this variable set to true if key pressed is in targetWord
//	counterDisplayedLetters = 0 // count number of letters displayed - use to indicate game won
//	counterIncorrectGuess = 0 // count incorrect guesses
//	totalIncorrectGuessesAllowed = 12 // compare against counterIncorrect Guess - use to lose game
//	counterGamesWon = 0 // displays number of games won
//	counterGamesLost = 0 // displays number of games lost
//
// 	Listen for key
// 	capture key press
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