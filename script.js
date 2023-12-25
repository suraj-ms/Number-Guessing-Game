randumNumber = parseInt(Math.round(Math.random() * 100 + 1));

userInput = document.getElementById("guessField");
submit = document.getElementById("subt");
guesses = document.querySelector(".guesses");
lastResult = document.querySelector(".lastResult");
lowOrHi = document.querySelector(".lowOrHi");

prevGuess = [];
rounds = 1;

submit.addEventListener("click", function (e) {
    e.preventDefault();
    guess = parseInt(userInput.value);
    if (rounds > 10) {
        endGame();
    } else {
        if (prevGuess.includes(guess)) {
            displayMessage(`Please enter new number`);
        } else {
            lowOrHi.style.display = "none";
            validateGuss(guess);
            rounds++;
            console.log(`I am else with ${rounds}`);
        }

    }
});

function validateGuss(guess) {
    if (isNaN(guess)) {
        displayMessage(`This is not a valid number`);
        rounds--;
    } else if (guess < 1) {
        alert("PLease enter a number more than 1");
    } else if (guess > 100) {
        alert("PLease enter a  number less than 100");
    } else {
        if (guess === randumNumber) {
            displayMessage(`Entered number is correct`);
            endGame()

        }
        prevGuess.push(guess);
        updateGuesses();
    }
}

function updateGuesses() {
    guesses.innerHTML = prevGuess;
    lastResult.innerHTML = `${11 - rounds}`;
}

function displayMessage(message) {
    console.log(randumNumber);
    lowOrHi.style.display = "block";
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    lowOrHi.style.display = "block";
    if (rounds == 11) {
        lowOrHi.innerHTML =
            '<button class = "newGameMessage">Game over click me to start a new game</button>';
    } else {
        lowOrHi.innerHTML =
            '<button class = "newGameMessage">WOW! Currect answer start  new game</button>';
    }
}
