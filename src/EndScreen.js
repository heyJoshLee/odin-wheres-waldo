import Modal from "./Modal";
import { sansFont } from './Styles'
const EndScreen = (scores, getPlayerName, startGame) => {
  const { toggleVisible, createBackground, createModalContainer, openModal, closeModal } = Modal();

  let scoreMessageContainer;
  let score;

  const setScore = (newScore) => {
    score = newScore;
    setScoreMessage(score);
  }

  const close = () => {
    closeModal(element);
  }

  const toggle = () => {
    toggleVisible(element);
  }

  const setScoreMessage = (score) => {
    scoreMessageContainer.textContent = `Your time is ${score}.`;
  }

  const createModalContent = (modalElement) => {

    const createButton = () => {
      const playAgainButton = document.createElement('div');
      playAgainButton.style.backgroundColor = '#27ae60'
      playAgainButton.style.color = '#ecf0f1';
      playAgainButton.style.margin = '0 auto';
      playAgainButton.style.width = '300px';
      playAgainButton.style.padding = '50px 0';
      playAgainButton.style.borderRadius = '80x';
      playAgainButton.style.marginTop = '50px';
      playAgainButton.style.fontSize = '24px';
      playAgainButton.textContent = 'Play Again?';
      playAgainButton.addEventListener('mouseenter', (e) => {
        e.target.style.cursor = 'pointer';
      });

      playAgainButton.addEventListener('click', () => {
        startGame();
      })
      return playAgainButton;
    }

    const modalContent = document.createElement('div');
    modalContent.style.fontFamily = sansFont;
    modalContent.style.textAlign = 'center';

    const heading = document.createElement('h1');
    heading.textContent = '~You Win~';

    scoreMessageContainer = document.createElement('div');
    scoreMessageContainer.textContent = 'Your time is 10:00';
    scoreMessageContainer.style.fontSize = '24px';

    modalElement.append(modalContent);
    modalContent.appendChild(heading);
    modalContent.append(scoreMessageContainer);
    modalContent.append(createButton());
  }


  const element = createBackground();
  const modalElement = createModalContainer(element);
  createModalContent(modalElement);

  return {
    toggle,
    setScore,
    open,
    close,
  }
}

export default EndScreen;