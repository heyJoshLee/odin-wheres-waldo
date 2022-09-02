import Modal from "./Modal";
import { sansFont } from './Styles'

const WelcomeScreen = (setPlayerName, startGame) => {
  const { toggleVisible, createBackground, createModalContainer, openModal, closeModal } = Modal();

  const toggle = () => {
    toggleVisible(element);
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
      playAgainButton.textContent = 'Start Game';
      playAgainButton.addEventListener('mouseenter', (e) => {
        e.target.style.cursor = 'pointer';
      });
      playAgainButton.addEventListener('click', () => {
        setPlayerName(nameInput.value || 'anonymous');
        startGame();
      })
      return playAgainButton;
    }


    const modalContent = document.createElement('div');
    modalContent.style.fontFamily = sansFont;
    modalContent.style.textAlign = 'center';
    modalContent.style.padding = '50px';

    modalElement.append(modalContent);


    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to the Game';
    modalContent.appendChild(heading);

    const directions = document.createElement('div');
    directions.textContent = `
    Look for the characters listed at the bottom of the picture. When you find them, click on them and choose the correct name.
    `
    directions.style.fontSize = '24px';
    modalContent.appendChild(directions);

    const nameInput = document.createElement('input');
    nameInput.style.height = '50px';
    nameInput.style.width = '200px';
    nameInput.style.marginTop = '50px';
    nameInput.style.fontSize = '20px';
    nameInput.style.padding = '0 10px';
    modalContent.appendChild(nameInput);

    modalContent.append(createButton());
  }

  const close = () => closeModal(element);

  const element = createBackground();
  const modalElement = createModalContainer(element);
  createModalContent(modalElement);

  return {
    toggle,
    close,
  }
}

export default WelcomeScreen;