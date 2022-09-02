import ScoreItem from "./ScoreItem";
import { sansFont, white } from "./Styles";
const ScoreContainer = () => {

  let scores = [];

  const setScores = (scoresArray) => {
    scores = scoresArray;
    createScoreElements();
  }

  const createElement = () => {
    const rightPane = document.querySelector('#right-pane');

    const scoreContainerElement = document.createElement('div');
    scoreContainerElement.id = 'score-container';
    scoreContainerElement.style.fontFamily = sansFont;
    scoreContainerElement.style.color = white;
    scoreContainerElement.style.padding = '20px';

    const heading = document.createElement('div');
    heading.textContent = 'High Scores';
    heading.style.textAlign = 'center';
    heading.style.color = white;
    heading.style.fontFamily = sansFont;
    heading.style.marginTop = '10px';
    rightPane.appendChild(heading);

    rightPane.appendChild(scoreContainerElement)

    return scoreContainerElement;
  }

  const createScoreElements = () => {
    scores.forEach((score) => {
      ScoreItem(score, element);
    });
  }

  const element = createElement();

  return {
    setScores,
  }

}

export default ScoreContainer;