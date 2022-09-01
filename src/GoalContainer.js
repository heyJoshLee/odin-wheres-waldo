const GoalContainer = (ipsyImageImagePath) => {
  const BORDER_SIZE = 5;
  const IMAGE_QUERY_SELECTOR_STRING = '#ispy-image';
  let element;

  const getElement = () => {
    if (!element) {
      element = generateElement();
    }
    return element;
  }

  const getBorderSize = () => BORDER_SIZE;

  const generateElement = () => {
    const goalContainer = document.createElement('div');
    const ispyImageElement = document.querySelector(IMAGE_QUERY_SELECTOR_STRING);
    const ispyImageWidth = ispyImageElement.style.width.split('p')[0];
    const ispyImageHeight = ispyImageElement.style.height.split('p')[0];
    goalContainer.id = 'goal-container';
    goalContainer.style.width = `${ispyImageWidth}px`;
    goalContainer.style.height = `${ispyImageHeight / 5}px`;
    goalContainer.style.border = `${BORDER_SIZE}px solid black`;
    goalContainer.style.boxSizing = 'border-box';
    goalContainer.style.display = 'flex';
    ispyImageElement.after(goalContainer);
    return goalContainer;
  }

  const generateGoals = (goalArray) => {
    const ispyImageElement = document.querySelector(IMAGE_QUERY_SELECTOR_STRING);
    const backgroundImage = ispyImageElement.style.backgroundImage;
    console.log(backgroundImage);
    goalArray.forEach((goal) => {
      goal.setImage(ipsyImageImagePath)
      goal.generateGoal(getElement());
    })
  }

  return {
    getElement,
    generateGoals,
    generateElement,
    getBorderSize,
  }
}

export default GoalContainer;