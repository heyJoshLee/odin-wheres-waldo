import { lightGrey } from "./Styles";
const ScoreItem = (scoreObject, parent) => {

  const createElement = () => {
    const scoreItemElement = document.createElement('div');
    scoreItemElement.classList.add('score-item');
    scoreItemElement.style.borderBottom = `4px solid ${lightGrey}`;
    scoreItemElement.style.padding = '10px 30px';
    scoreItemElement.textContent = `${scoreObject.name}:    ${scoreObject.score}`;
    parent.appendChild(scoreItemElement);
    return scoreItemElement;
  }

  createElement();
}

export default ScoreItem;