const Answer = (answerObject) => {

  const { name, coords } = answerObject;
  let image = null;
  let ipsyImageObject = null;

  const getName = () => name;
  const getCoords = () => coords;

  const width = () => coords[1][0] - coords[0][0];
  const height = () => coords[2][1] - coords[0][1];

  const setImage = (imageToSet) => {
    image = imageToSet;
  }

  const setIpsyImageObject = (newIpsyImageObject) => {
    ipsyImageObject = newIpsyImageObject
  }

  const getImage = () => image;

  const generateGoal = (goalContainerElement) => {
    const ZOOM = 1000;
    const goalElement = document.createElement('div');
    goalElement.classList.add('goal-item')
    const goalContainerWidth = goalContainerElement.style.width.split('p')[0];
    const goalContainerHeight = goalContainerElement.style.height.split('p')[0];
    const goalWidth = goalContainerWidth / 5;
    const goalHeight = goalContainerHeight - 5;
    goalElement.style.width = `${goalWidth}px`;
    goalElement.style.height = `${goalHeight}px`;
    goalElement.style.border = '1px solid black';
    goalElement.style.boxSizing = 'border-box';
    goalElement.style.backgroundSize = `${ZOOM}% ${ZOOM}%`;
    goalElement.style.backgroundRepeat = 'no-repeat';
    goalElement.style.backgroundImage = `url('${image}')`;
    const offSetX = -50;
    const offSetY = -100
    const backgroundPositionX = (-getCoords()[0][0] + offSetX);
    const backgroundPositionY = (-getCoords()[0][1] + offSetY);
    //console.log(backgroundPositionX);
    //console.log(backgroundPositionY)

    goalElement.style.backgroundPosition = `${backgroundPositionX}px ${backgroundPositionY}px`;
    goalContainerElement.appendChild(goalElement);
  }

  const generateAnswerSpace = (ipsyImageElement) => {
    const answerElement = document.createElement('div');
    answerElement.classList.add('answer');
    answerElement.style.position = 'absolute';
    answerElement.style.top = '0px';
    answerElement.style.left = '0px';
    answerElement.style.width = `${width()}px`;
    answerElement.style.height = `${height()}px`;
    answerElement.style.top = `${getCoords()[0][1]}px`;
    answerElement.style.left = `${getCoords()[0][0]}px`
    answerElement.style.border = '5px solid red';
    answerElement.addEventListener('click', setToCorrectAnswer)
    ipsyImageElement.appendChild(answerElement);
  }

  const setToCorrectAnswer = () => {
    console.log(`You are clicking on ${name}`)
  }

  const attemptAnswer = (answerX, answerY) => {
    console.log(name, answerX, answerY)
  }

  return {
    getName,
    getCoords,
    width,
    height,
    setImage,
    getImage,
    generateGoal,
    generateAnswerSpace,
    setIpsyImageObject,
    attemptAnswer,
  }
}

export default Answer;