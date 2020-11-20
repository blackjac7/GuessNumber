
window.onload = function() {
	document.getElementById('number-check').addEventListener('click', playGame)
	document.getElementById('number-restart').addEventListener('click', restartGame)
}

/////////////////////////////////////////////////////////////////////////
// Function utama
function playGame(){
	let numberGuess = document.getElementById('number-guess').value
	displayResult(numberGuess)
	saveGuessHistory(numberGuess)
	displayHistory()
}

function displayResult(numberGuess){
	if (numberGuess > correctNumber){
		showNumberHigh()
	}else if (numberGuess < correctNumber){
		showNumberLow()
	}else if (numberGuess == correctNumber){
		showYouCorrect()
	}
}

/////////////////////////////////////////////////////////////////////////
// Restart game
function restartGame(){
	correctNumber = getRandomNumber()
	document.getElementById('result').innerHTML = ''
	guesses = []
	displayHistory()
}

/////////////////////////////////////////////////////////////////////////
// Random Number 1 sampai 100
let correctNumber = getRandomNumber()

function getRandomNumber(){
	let randomNumber = Math.floor(Math.random() * 100) + 1
	return randomNumber
}

/////////////////////////////////////////////////////////////////////////
// HISTORY
let guesses = []
// Save guess history .push()
function saveGuessHistory(guess) {
	guesses.push(guess)
}
// Display guess history to user
function displayHistory (){
	let list = "<ul class='list-group'>"
	
	for (let i = guesses.length - 1; i >= 0; i--){
		list += "<li class='list-group-item'>" + "You guessed " + guesses[i] + "</li>"
	}
	list += '</ul>'
	document.getElementById('history').innerHTML = list
}

/////////////////////////////////////////////////////////////////////////
// Dialog type
function getDialog (dialogType, text){
	let dialog;
	switch(dialogType){
		case 'warning':
			dialog = "<div class='alert-warning'>"
			break;
		case 'correct':
			dialog = "<div class='alert-correct'>"
			break;
	}
	dialog += text
	dialog += '</div>'
	return dialog
}

function showYouCorrect (){
	const text = 'Cool, you got it!'
	let dialog = getDialog('correct', text )
	document.getElementById('result').innerHTML = dialog
}

function showNumberHigh (){
	const text = 'Your guess is too high!'
	let dialog = getDialog('warning', text )
	document.getElementById('result').innerHTML = dialog
}

function showNumberLow (){
	const text = 'Your guess is too low!'
	let dialog = getDialog('warning', text )
	document.getElementById('result').innerHTML = dialog
}

