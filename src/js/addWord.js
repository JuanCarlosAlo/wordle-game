import { ALL_WORDS } from './constants.js';

const randomWord = ALL_WORDS[Math.floor(Math.random() * ALL_WORDS.length)];
console.log(randomWord);
let counter = 0;

const paintLetter = (letter, position, className, gameBoard) => {
  const letterBox = gameBoard.children[counter].children[position];
  letterBox.classList.add(className);
  letterBox.textContent = letter;
};

const printWord = (word, gameBoard) => {
  let wordToCheck = randomWord;
  let className;
  for (let index = 0; index < word.length; index++) {
    if (randomWord.charAt(index) === word.charAt(index)) {
      className = 'green';
      wordToCheck = wordToCheck.replace(word[index], '-');
      paintLetter(word[index], index, className, gameBoard);
    }
  }

  console.log(wordToCheck);
  for (let index = 0; index < wordToCheck.length; index++) {
    const letterBox = gameBoard.children[counter].children[index];
    if (wordToCheck.includes(word[index])) {
      console.log(wordToCheck);
      className = 'yellow';
      wordToCheck = wordToCheck.replace(word[index], '-');
      paintLetter(word[index], index, className, gameBoard);
    } else if (
      !letterBox.classList.contains('green') ||
      !letterBox.classList.contains('yellow')
    )
      className = 'gray';
    paintLetter(word[index], index, className, gameBoard);
  }
  counter++;
};

export { printWord };
