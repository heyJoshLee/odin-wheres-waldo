import GoalContainer from './GoalContainer';
const IspyImage = (correctAnswers, SelectorFactoryFunction, GuessingBoxFactoryFunction, stopGame) => {
  const WIDTH = 1200;
  const HEIGHT = 700;
  const getWidth = () => WIDTH;
  const getHeight = () => HEIGHT;
  let currentCorrectAnswer = null;
  const getCurrentCorrectAnswer = () => currentCorrectAnswer;

  const imagePathChoices = ['./assets/games.jpeg'];
  const imagePath = imagePathChoices[0];
  const getImagePath = () => imagePath;

  const createImageElement = () => {
    const imageElement = document.createElement('div');
    imageElement.style.backgroundSize = '100% 100%';
    imageElement.style.backgroundRepeat = 'no-repeat';
    imageElement.style.backgroundImage = `url('${imagePath}')`;
    imageElement.style.boxSizing = 'border-box';
    imageElement.style.position = 'relative';
    imageElement.classList.add('open-guessing-box');

    imageElement.style.width = `${WIDTH}px`;
    imageElement.style.height = `${HEIGHT}px`;
    imageElement.id = 'ispy-image';

    document.querySelector('#left-pane').appendChild(imageElement);
    return imageElement;
  }




  const element = createImageElement();
  const goalContainer = GoalContainer(getImagePath());
  const selector = SelectorFactoryFunction();
  const guessingBox = GuessingBoxFactoryFunction(correctAnswers, getCurrentCorrectAnswer, stopGame);

  goalContainer.generateElement();
  goalContainer.generateGoals(correctAnswers);
  correctAnswers.forEach((answer) => {
    answer.generateAnswerSpace(element);
  });


  document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('open-guessing-box')) {
      currentCorrectAnswer = e.target.getAttribute('data-character-name');
      guessingBox.open(selector.getTop(), selector.getLeft());
    } else {
      guessingBox.close();
    }
  })

  const toggleCursor = (e) => {
    const cursor = e.target.style.cursor;
    e.target.style.cursor = 'pointer';
  }

  element.addEventListener('mouseenter', toggleCursor);



  element.style.backgroundColor = 'red'
  //element.addEventListener('click', startAnswering);

  return {
    imagePath,
    getHeight,
    getWidth,
    getCurrentCorrectAnswer,
  }
}

export default IspyImage;