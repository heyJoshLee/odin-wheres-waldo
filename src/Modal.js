const Modal = () => {
  const toggleVisible = (element) => {
    if (element.style.visibility === 'visible') {
      element.style.visibility = 'hidden';
    } else {
      element.style.visibility = 'visible';
    }
  }

  const openModal = (element) => element.style.visibility = 'visible';
  const closeModal = (element) => element.style.visibility = 'hidden';


  const createBackground = () => {
    const background = document.createElement('dov');
    background.id = 'modal-background';
    background.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    background.style.position = 'fixed';
    background.style.top = '0px';
    background.style.left = '0px';
    background.style.right = '0px';
    background.style.bottom = '0px';
    background.style.display = 'flex';
    background.style.alignItems = 'center';
    background.style.justifyContent = 'center';
    background.style.visibility = 'visible'
    document.body.appendChild(background);
    return background;
  }

  const createModalContainer = (backgroundElement) => {
    const messageModalElement = document.createElement('div');
    messageModalElement.id = 'message-modal';
    messageModalElement.style.width = '1200px';
    messageModalElement.style.height = '800px';
    messageModalElement.style.backgroundColor = '#ecf0f1';
    messageModalElement.style.borderRadius = '10px';
    backgroundElement.style.zIndex = '1';
    backgroundElement.appendChild(messageModalElement);
    return messageModalElement;
  }

  return {
    toggleVisible,
    createBackground,
    createModalContainer,
    openModal,
    closeModal,
  }
}

export default Modal;