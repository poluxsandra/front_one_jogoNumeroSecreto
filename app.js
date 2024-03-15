let listNumberSorted = []
let limitRange = 4
let secretNumber = generateRandomNumber()
let tried = 1

cleanField()
function elementText(classElement, textElement) {

	const elementField = document.querySelector(classElement)
	elementField.innerHTML = textElement

	responsiveVoice.speak(textElement, 'Brazilian Portuguese Female', {rate: 1.2})

}

function initialMessage() {

	elementText('.titulo__principal', 'Jogo do Número Secreto')
	elementText('.texto__paragrafo', 'Escolha um número entre 0 a 100')


}

initialMessage()

function checkNumber() {

	let userNumber = document.querySelector('.container__input').value

	let wordTried = tried > 1 ? 'tentativas' : 'tentativa'
	let messageTried = `Você descobriu o número secreto com ${tried} ${wordTried}`

	if (secretNumber == userNumber) {

		elementText('.titulo__principal', 'Acertou!!')
		elementText('.texto__paragrafo', messageTried)
		ableButtonNewGame()

	}

	else if (secretNumber > userNumber) {

		elementText('.texto__paragrafo', 'O número secreto é maior')
		tried++
		cleanField()

	}

	else {

		elementText('.texto__paragrafo', 'O número secreto é menor')
		tried++
		cleanField()

	}

}

function generateRandomNumber () {

	let numberSorted = parseInt(Math.random() * limitRange + 1)

	if (listNumberSorted.length == limitRange) {

		listNumberSorted = []

	}

	if (listNumberSorted.includes(numberSorted)) {

		return generateRandomNumber()

	}

	else {

		listNumberSorted.push(numberSorted)
		return numberSorted

	}

}

function cleanField() {

	let numberField = document.querySelector('.container__input')
	numberField.value = ''

}

function ableButtonNewGame() {

	const buttonNewGame = document.querySelector('#reiniciar')
	buttonNewGame.removeAttribute('disabled')

}

function newGame() {

	secretNumber = generateRandomNumber()
	cleanField()
	tried = 1
	initialMessage()
	document.querySelector('#reiniciar').setAttribute('disabled', true)
	console.log(listNumberSorted)

}

// console.log(listNumberSorted)
