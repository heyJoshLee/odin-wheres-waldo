import Modal from "./Modal";
import { sansFont } from "./Styles";
const LoadingScreen = () => {
  const { toggleVisible, createBackground, createModalContainer, openModal, closeModal } = Modal();
  let loadingInterval;
  const loadingMessage = 'Loading...';

  const open = () => openModal(element);

  const close = () => {
    clearInterval(loadingInterval)
    closeModal(element)
  }

  const createModalContent = (modalElement) => {
    const loadingMessageContainer = document.createElement('div');
    loadingMessageContainer.style.textAlign = 'center';
    loadingMessageContainer.style.marginTop = '35%';
    loadingMessageContainer.style.fontFamily = sansFont;
    loadingMessageContainer.style.fontSize = '36px';
    loadingMessageContainer.style.keyfram
    modalElement.appendChild(loadingMessageContainer);
    return loadingMessageContainer;
  }

  const loadingEffect = (contentDiv) => {
    const messageArray = loadingMessage.split('');
    contentDiv.textContent = loadingMessage;
    let currentIndex = 0;
    const loadingSpeed = 200;
    const typeLoadingMessage = () => {
      if (contentDiv.textContent === loadingMessage) {
        contentDiv.textContent = '';
        currentIndex = 0;
      }
      contentDiv.textContent += messageArray[currentIndex];
      currentIndex += 1;
    }

    loadingInterval = setInterval(typeLoadingMessage, loadingSpeed);
  }

  const element = createBackground();
  element.style.zIndex = 10;

  const modalContainer = createModalContainer(element);
  const modalContent = createModalContent(modalContainer);
  loadingEffect(modalContent);
  document.body.appendChild(element);

  return {
    open,
    close,
  }
}

export default LoadingScreen;