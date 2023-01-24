import { ALL_WORDS } from './constants.js';

const printWord = (word, gameBoard) => {
  const fragment = document.createDocumentFragment();
  if (word.length === 5) {
    for (let index = 0; index < word.length; index++) {
      console.log(
        (gameBoard.children[0].children[index].textContent = word[index])
      );
    }
  }
};

export { printWord };
