const Answer = (answerObject) => {

  const { name, coords, preview, id } = answerObject;
  let image = null;
  let ipsyImageObject = null;
  let goalElement;
  let hasAnsweredCorrectly = false;

  const getHasAnsweredCorrectly = () => hasAnsweredCorrectly;

  const getGoalElement = () => goalElement;

  const getId = () => id;

  const reset = () => {
    hasAnsweredCorrectly = false;
    if (getGoalElement()) {
      getGoalElement().style.opacity = 1;
    }
  }

  const getName = () => name;
  const getCoords = () => coords;
  const getImage = () => image;
  const setImage = (imageToSet) => {
    image = imageToSet;
  }

  const width = () => coords[1][0] - coords[0][0];
  const height = () => coords[2][1] - coords[0][1];

  const setIpsyImageObject = (newIpsyImageObject) => {
    ipsyImageObject = newIpsyImageObject
  }


  const generateGoal = (goalContainerElement) => {
    const goalElementDiv = document.createElement('div');
    goalElementDiv.classList.add('goal-item')
    const goalContainerWidth = goalContainerElement.style.width.split('p')[0];
    const goalContainerHeight = goalContainerElement.style.height.split('p')[0];
    const goalWidth = goalContainerWidth / 5;
    const goalHeight = goalContainerHeight - 5;
    goalElementDiv.style.width = `${goalWidth}px`;
    goalElementDiv.style.height = `${goalHeight}px`;
    goalElementDiv.style.border = '1px solid black';
    goalElementDiv.style.boxSizing = 'border-box';
    goalElementDiv.style.backgroundSize = `${preview.backgroundSize}% ${preview.backgroundSize}%`;
    goalElementDiv.style.backgroundRepeat = 'no-repeat';
    goalElementDiv.style.backgroundImage = `url('${image}')`;
    const backgroundPositionX = preview.coords[0];
    const backgroundPositionY = preview.coords[1];

    goalElementDiv.style.backgroundPosition = `${backgroundPositionX}px ${backgroundPositionY}px`;
    goalContainerElement.appendChild(goalElementDiv);
    goalElement = goalElementDiv;
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
    answerElement.dataset.characterName = name;
    //answerElement.style.border = '5px solid red';
    answerElement.classList.add('open-guessing-box');

    ipsyImageElement.appendChild(answerElement);
  }


  const attemptAnswer = (correctAnswer, guessChoice) => {

    const isAnswerRight = (correctAnswer === guessChoice);
    if (isAnswerRight) {
      getGoalElement().style.opacity = .20;
      hasAnsweredCorrectly = true;
    } else {
      console.log('wrong')
    }


    return isAnswerRight;
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
    getHasAnsweredCorrectly,
    reset,
    getId
  }
}

export default Answer;