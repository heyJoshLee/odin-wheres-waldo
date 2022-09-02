import GuessingItem from "./GuessingItem";
import { darkGray, white } from './Styles';

const GuessingBox = (answerArray, getCurrentCorrectAnswer, stopGame) => {
  let element = 'koj';

  const open = (top, left) => {
    const offset = 40;
    element.style.top = `${top + offset}px`;
    element.style.left = `${left + offset}px`;
    element.style.visibility = 'visible';
  }

  const close = () => {
    element.style.visibility = 'hidden';
  }

  const checkForGameEnd = () => {

    let allAnsweredCorrectly = answerArray.every((answer) => {
      return answer.getHasAnsweredCorrectly();
    });

    if (allAnsweredCorrectly) {
      stopGame();
    }
  }

  const createElement = () => {
    const boxElement = document.createElement('div');
    boxElement.id = 'guessing-box';
    boxElement.style.backgroundColor = darkGray;
    boxElement.style.color = white;
    boxElement.style.width = '200px';
    boxElement.style.height = '300px';
    boxElement.style.position = 'fixed';
    boxElement.style.top = '0px';
    boxElement.style.left = '0px';
    boxElement.style.display = 'grid';
    boxElement.style.rowGap = '2px';

    boxElement.style.visibility = 'hidden';

    document.body.appendChild(boxElement);
    return boxElement
  }

  const createAnswerChoices = () => {
    answerArray.forEach((answer) => {
      const item = GuessingItem(answer, element, getCurrentCorrectAnswer, checkForGameEnd);
      const itemElement = item.createElement();
      element.appendChild(itemElement);
    })

  }

  element = createElement();
  createAnswerChoices();


  return {
    open,
    close,
  }
}

export default GuessingBox;