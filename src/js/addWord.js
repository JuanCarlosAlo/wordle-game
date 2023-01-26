import { ALL_WORDS } from "./constants.js";

const randomWord = ALL_WORDS[Math.floor(Math.random() * ALL_WORDS.length)];
console.log(randomWord);
let counter = 0;

const paintLetter = (letter, position, className, gameBoard) => {
  const letterBox = gameBoard.children[counter].children[position];
  if (letterBox.classList.contains("green")) return;
  letterBox.classList.add(className);
  letterBox.textContent = letter;
};

const checkWord = (word, gameBoard) => {
  let wordToCheck = "";
  let className;
  for (let index = 0; index < word.length; index++) {
    if (word.charAt(index) === randomWord.charAt(index)) {
      className = "green";
      wordToCheck += "-";
      paintLetter(word[index], index, className, gameBoard);
    } else {
      wordToCheck += randomWord[index];
    }
  }

  console.log(wordToCheck);
  for (let index = 0; index < wordToCheck.length; index++) {
    if (wordToCheck.includes(word[index])) {
      className = "yellow";

      paintLetter(word[index], index, className, gameBoard);
    } else {
      className = "gray";
      paintLetter(word[index], index, className, gameBoard);
    }
  }

  counter++;
};

export { checkWord as printWord };
