import { lightGrey, darkGray, sansFont } from './Styles';

const GuessingItem = (answerObject, guessingBoxElement, getCurrentCorrectAnswer, checkForGameEnd) => {

  const createElement = () => {
    const guessingElement = document.createElement('div');
    guessingElement.classList.add('guessing-item');
    guessingElement.textContent = answerObject.getName();
    guessingElement.style.fontFamily = sansFont;
    const originalBackgroundColor = darkGray;
    guessingElement.style.backgroundColor = originalBackgroundColor;
    guessingElement.style.padding = "20px"


    guessingElement.addEventListener('mouseenter', () => {
      guessingElement.style.backgroundColor = lightGrey;
      guessingElement.style.cursor = "pointer";
    });

    guessingElement.addEventListener('mouseleave', () => {
      guessingElement.style.backgroundColor = originalBackgroundColor;
      guessingElement.style.cursor = "default";
    });

    guessingElement.addEventListener('click', () => {
      const correctAnswer = getCurrentCorrectAnswer();
      const guess = answerObject.getName()
      answerObject.attemptAnswer(correctAnswer, guess);
      guessingBoxElement.style.visibility = 'hidden';
      checkForGameEnd();
    })

    const answeredCorrectly = () => {


      return true;
    }
    return guessingElement;
  }

  return {
    createElement,
  }
}

export default GuessingItem; 