import { sansFont, white } from "./Styles";
const Timer = () => {

  let currentTime = 0;
  let isRunning;

  const updateCurrentTimeHTML = () => element.textContent = currentTime;

  const createElement = () => {
    const heading = document.createElement('div');
    heading.textContent = 'Timer';
    heading.style.fontFamily = sansFont;
    heading.style.textAlign = 'center';
    heading.style.color = white;
    heading.style.padding = '10px';


    document.querySelector('#right-pane').append(heading);

    const timerElement = document.createElement('div');
    timerElement.id = 'timer';
    timerElement.style.backgroundColor = white;
    timerElement.style.color = 'black';
    timerElement.style.width = '100%';
    timerElement.style.padding = '10px';
    timerElement.style.border = '4px solid black';
    timerElement.textContent = currentTime;
    timerElement.style.margin = '0 auto';
    timerElement.style.textAlign = 'center';
    timerElement.style.fontFamily = sansFont;
    document.querySelector('#right-pane').append(timerElement);
    return timerElement;
  }

  const start = () => {
    currentTime = 0;
    isRunning = true;
  }

  const stop = () => inRunning = false

  const tick = () => {
    if (!isRunning) { return }
    currentTime += 1;
    updateCurrentTimeHTML(currentTime)
  }

  setInterval(tick, 100)



  const element = createElement();

  return {
    start,
    stop,
  }

}

export default Timer;