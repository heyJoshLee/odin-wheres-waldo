import GoalContainer from './GoalContainer';
const IspyImage = (correctAnswers, SelectorFactoryFunction, GuessingBoxFactoryFunction) => {
  const WIDTH = 1200;
  const HEIGHT = 700;
  const getWidth = () => WIDTH;
  const getHeight = () => HEIGHT;

  const imagePathChoices = ['./assets/games.jpeg'];
  const imagePath = imagePathChoices[0];
  const getImagePath = () => imagePath;

  const createImageElement = () => {
    const imageElement = document.createElement('div');
    imageElement.style.backgroundSize = '100% 100%';
    imageElement.style.backgroundRepeat = 'no-repeat';
    imageElement.style.backgroundImage = `url('${imagePath}')`;
    imageElement.style.boxSizing = 'border-box';

    imageElement.style.width = `${WIDTH}px`;
    imageElement.style.height = `${HEIGHT}px`;
    imageElement.id = 'ispy-image';

    document.body.appendChild(imageElement);
    return imageElement;
  }




  const element = createImageElement();
  const goalContainer = GoalContainer(getImagePath());
  const selector = SelectorFactoryFunction();
  const guessingBox = GuessingBoxFactoryFunction(correctAnswers, selector)

  goalContainer.generateElement();
  goalContainer.generateGoals(correctAnswers);
  correctAnswers.forEach((answer) => {
    answer.generateAnswerSpace(element);
  });

  const startAnswering = () => {
    console.log('start aswering')
    guessingBox.open(selector.getTop(), selector.getLeft());
    selector.setUpdatingPosition(false);
  }

  element.style.backgroundColor = 'red'
  element.addEventListener('click', startAnswering);




  return {
    imagePath,
    getHeight,
    getWidth,
  }
}

export default IspyImage;