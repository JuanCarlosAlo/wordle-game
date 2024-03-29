// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";
import { createBoard } from "./gameBoard.js";
import { printWord, retry } from "./addWord.js";
const gameBoard = document.getElementById("game-board");
const formElement = document.getElementById("user-word-form");
const retryButton = document.getElementById("retry-button");
createBoard(gameBoard);

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  if (e.target.word.value.length === 5) {
    printWord(formElement.word.value, gameBoard);
  } else {
    formElement.word.value = "";
    formElement[0].placeholder = "palabra incorrecta";
  }
});

retryButton.addEventListener("click", (e) => {
  retry(gameBoard);
});
