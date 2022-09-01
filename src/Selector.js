import GuessingBox from './GuessingBox';

const Selector = (querySelector) => {

  const WIDTH = 100;
  const HEIGHT = 100;
  const ZOOM = 1;

  let top;
  let left;

  const getTop = () => top;
  const getLeft = () => left;

  const setTop = (newPos) => top = newPos;
  const setLeft = (newPos) => left = newPos;


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
  // element.style.backgroundImage = `url('${ISPY_ELEMENT.src}')`;
  // element.style.backgroundRepeat = 'no-repeat';
  // element.style.backgroundSize = `${ISPY_ELEMENT.width * ZOOM}px ${ISPY_ELEMENT.height * ZOOM}px`;
  // ${ ISPY_ELEMENT.width * ZOOM }px ${ ISPY_ELEMENT.height * ZOOM } px`

  // glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";


  //TODO: Put the selector back in the DOM
  //document.body.appendChild(element);

  const updateSelectorPosition = (e) => {
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
  }

}

export default Selector;