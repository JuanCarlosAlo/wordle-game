import { ALL_WORDS } from "./constants.js";

const randomWord = ALL_WORDS[Math.floor(Math.random() * ALL_WORDS.length + 1)];
console.log(randomWord);
let counter = 0;

const compareWord = (word, index) => {
  if (randomWord.charAt(index) === word.charAt(index)) {
    return "green";
  } else if (!randomWord.includes(word[index])) {
    return "gray";
  } else if (randomWord.includes(word[index])) {
    return "yellow";
  }
};

const printWord = (word, gameBoard) => {
  for (let index = 0; index < word.length; index++) {
    const letterBox = gameBoard.children[counter].children[index];
    if (compareWord(word, index) === "yellow") {
      letterBox.classList.add("yellow");
    } else if (compareWord(word, index) === "gray") {
      letterBox.classList.add("gray");
    } else if (compareWord(word, index) === "green") {
      letterBox.classList.add("green");
    }
    letterBox.textContent = word[index];
  }
  counter++;
};

export { printWord };
