import { randomWords } from "./data.js";

const keyboard = document.querySelector(".keyboard");
const imgEl = document.querySelector(".img__holder img");
const wordDisplay = document.querySelector(".word-display");
const hintText = document.querySelector(".hint-text b");
const incorrectText = document.querySelector(".incorrect-guess b");

const maxGuesses = 6;
let currentWord,
  incorrectGuess = 0,
  correctLetters = [];

const getRandomWord = () => {
  const { word, hint } =
    randomWords[Math.floor(Math.random() * randomWords.length)];
  currentWord = word;
  wordDisplay.innerHTML = word
    .split("")
    .map(() => '<li class="letter"></li>')
    .join("");
  hintText.innerText = hint;
  console.log(word);
};

const innerGame = (button, clickedLetter) => {
  if (currentWord.includes(clickedLetter)) {
    [...currentWord].forEach((letter, index) => {
      if (letter === clickedLetter) {
        wordDisplay.querySelectorAll("li")[index].innerText = letter;
        wordDisplay
          .querySelectorAll("li")
          [index].classList.add("guessed__letter");
        correctLetters.push(letter);
      }
    });
  } else {
    incorrectGuess++;
  }
  button.disabled = true;
  imgEl.src = `./images/hangman-${incorrectGuess}.svg`;
  incorrectText.innerText = `${incorrectGuess} / ${maxGuesses}`;

  if (incorrectGuess === maxGuesses) return gameOver(false);
  if (correctLetters.length === [...currentWord].length) return gameOver(true);
};

const gameOver = (isVictory) => {
  if (isVictory === true) {
    alert("You guessed the correct word");
    getRandomWord();
    resetGame();
  } else {
    alert("You have lost");
    getRandomWord();
    resetGame();
  }
};

const resetGame = () => {
  incorrectGuess = 0;
  correctLetters = [];
  keyboard.querySelectorAll("button").forEach((btn) => (btn.disabled = false));
  incorrectText.innerText = `${incorrectGuess} / ${maxGuesses}`;
  imgEl.src = `./images/hangman-${incorrectGuess}.svg`;
};

for (let i = 97; i <= 122; i++) {
  const buttonEl = document.createElement("button");
  buttonEl.innerText = String.fromCharCode(i);
  keyboard.appendChild(buttonEl);
  buttonEl.addEventListener("click", (e) =>
    innerGame(e.target, String.fromCharCode(i))
  );
}

getRandomWord();
