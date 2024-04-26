let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#txt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.result');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

//+++++++++++++++++++++++++++++++++ Play the game +++++++++++++++++++++++++++++++++++++++

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        //console.log(guess);
        validateGuess(guess);
    });
}
//+++++++++++++++++++++++++++++++ Validate the guess ++++++++++++++++++++++++++++++++

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('PLease enter a valid number');
    } else if (guess < 1) {
        alert('PLease enter a number more than 1');
    } else if (guess > 100) {
        alert('PLease enter a  number less than 100');
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

//+++++++++++++++++++++++++++++++ Check the guess +++++++++++++++++++++++++++++

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is TOOO low`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is TOOO High`);
    }
}

//++++++++++++++++++++++++++++++++++++++++ Display the guess +++++++++++++++++++++++++++++

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `;
}

//++++++++++++++++++++++++++++++++++++++++ Display the message +++++++++++++++++++++++++++++

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

//++++++++++++++++++++++++++++++++++++++++ End the game +++++++++++++++++++++++++++++

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

//++++++++++++++++++++++++++++++++++++++++ Start a new the game +++++++++++++++++++++++++++++

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    });
}