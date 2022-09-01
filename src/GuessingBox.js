import GuessingItem from "./GuessingItem";

const GuessingBox = (answerArray, selector) => {

  let element;
  const getElement = () => element;

  const open = (top, left) => {
    const offset = 40;
    element.style.top = `${top + offset}px`;
    element.style.left = `${left + offset}px`;
    element.style.visibility = 'visible';
  }

  const createElement = () => {
    const boxElement = document.createElement('div');
    boxElement.id = 'guessing-box';
    boxElement.style.backgroundColor = '#34495e';
    boxElement.style.color = '#ecf0f1';
    boxElement.style.width = '200px';
    boxElement.style.height = '300px';
    boxElement.style.position = 'fixed';
    boxElement.style.top = '0px';
    boxElement.style.left = '0px';
    boxElement.style.display = 'grid';
    boxElement.style.rowGap = '2px';

    //boxElement.style.visibility = 'hidden';

    document.body.appendChild(boxElement);
    return boxElement
  }

  const createAnswerChoices = () => {
    //
    answerArray.forEach((answer) => {
      const item = GuessingItem(answer, selector);
      const itemElement = item.createElement();
      element.appendChild(itemElement);
    })

  }


  element = createElement();
  createAnswerChoices();



  return {
    open,
  }
}

export default GuessingBox;