const Selector = (querySelector) => {
  const WIDTH = 100;
  const HEIGHT = 100;
  const ZOOM = 1;

  let isUpdatingPosition = true;


  let top;
  let left;

  const getTop = () => top;
  const getLeft = () => left;


  const setUpdatingPosition = (newBool) => {
    isUpdatingPosition = newBool;
  }

  const getIsUpdatingPosition = () => isUpdatingPosition;




  const BORDER = '4px solid black';
  const BORDER_RADIUS = '100%';
  const ISPY_ELEMENT = document.querySelector(querySelector)

  const element = document.createElement('div');
  element.classList.add('selector');
  element.style.width = `${WIDTH}px`;
  element.style.height = `${HEIGHT}px`;
  element.style.border = BORDER;
  element.style.borderRadius = BORDER_RADIUS;
  element.style.position = 'absolute';
  //document.body.appendChild(element);

  const updateSelectorPosition = (e) => {
    if (!isUpdatingPosition) { return }

    const x = e.clientX;
    const y = e.clientY;
    const offset = 1;
    left = x - (WIDTH / 2);
    top = y - (HEIGHT / 2);
    element.style.left = `${left}px`;
    element.style.top = `${top}px`;
    //console.log(left, top)
  }



  document.addEventListener('mousemove', updateSelectorPosition)


  return {
    getLeft,
    getTop,
    setUpdatingPosition,
  }

}

export default Selector;