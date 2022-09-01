
const GuessingItem = (answerObject, selector) => {

  const createElement = () => {
    const guessingElement = document.createElement('div');
    guessingElement.classList.add('guessing-item');
    guessingElement.textContent = answerObject.getName();
    guessingElement.style.fontFamily = "Verdana, sans-serif";
    const originalBackgroundColor = "#2c3e50"
    guessingElement.style.backgroundColor = originalBackgroundColor;
    guessingElement.style.padding = "20px"
    guessingElement.addEventListener('mouseenter', () => {
      guessingElement.style.backgroundColor = "#7f8c8d"
      guessingElement.style.cursor = "pointer";
    });

    guessingElement.addEventListener('mouseleave', () => {
      guessingElement.style.backgroundColor = originalBackgroundColor;
      guessingElement.style.cursor = "default";
    });

    guessingElement.addEventListener('click', () => {
      answerObject.attemptAnswer(selector.getLeft(), selector.getTop());
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