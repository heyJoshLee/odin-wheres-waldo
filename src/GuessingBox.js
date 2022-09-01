const GuessingBox = () => {

  let element;
  const getElement = () => element;

  const open = (top, left) => {
    console.log(element)
    const offset = 40;
    element.style.top = `${top + offset}px`;
    element.style.left = `${left + offset}px`;
    element.style.visibility = 'visible';
  }

  const createElement = () => {
    const boxElement = document.createElement('div');
    boxElement.id = 'guessing-box';
    boxElement.style.backgroundColor = 'red';
    boxElement.style.width = '200px';
    boxElement.style.height = '300px';
    boxElement.style.position = 'fixed';
    boxElement.style.top = '0px';
    boxElement.style.left = '0px';
    boxElement.style.visibility = 'hidden';

    document.body.appendChild(boxElement);
    return boxElement
  }

  element = createElement();


  return {
    open,
  }
}

export default GuessingBox;