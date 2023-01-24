// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { createBoard } from './gameBoard.js';
import { printWord } from './addWord.js';
const gameBoard = document.getElementById('game-board');
const formElement = document.getElementById('user-word-form');

createBoard(gameBoard);

formElement.addEventListener('submit', e => {
  e.preventDefault();
  printWord(formElement.word.value, gameBoard);
});
