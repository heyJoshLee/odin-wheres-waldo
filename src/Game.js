import IspyImage from './IspyImage';
import Selector from './Selector';
import Answer from './Answer';
import GuessingBox from './GuessingBox';
import fireStoreConfig from '../firestore.config';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import EndScreen from './EndScreen';
import Timer from './Timer';
import ScoreContainer from './ScoreContainer';
import { darkGray } from './Styles';
import WelcomeScreen from './WelcomeScreen';

const Game = () => {
  const answers = [];
  const scores = [];
  let playerName;
  const getPlayerName = () => playerName;
  const setPlayerName = (newName) => playerName = newName;
  let startTime = null;
  let gameContainer;
  let welcomeScreen;
  let timer;

  const createGameContainer = () => {
    const gameContainer = document.createElement('div');
    gameContainer.id = 'game-container';
    gameContainer.style.display = 'grid';
    gameContainer.style.gridTemplateColumns = '4fr 1fr';
    gameContainer.style.width = '1500px'
    gameContainer.style.margin = '0 auto';

    const leftPane = document.createElement('div');
    leftPane.id = 'left-pane';
    const rightPane = document.createElement('div');
    rightPane.id = 'right-pane';
    rightPane.style.backgroundColor = darkGray;
    gameContainer.appendChild(leftPane);
    gameContainer.appendChild(rightPane);
    document.body.appendChild(gameContainer);
    return gameContainer;
  }


  const stopGame = () => {
    const time = Date.now() - startTime;
    const timeInSeconds = (time / 1000).toFixed(2)
    endScreen.setScore(timeInSeconds);
    updateScores(timeInSeconds);
    endScreen.toggle();
  }

  const updateScores = (timeInSeconds) => {
    const isPlayerNameAlreadyInScores = () => {
      let playerNames = scores.map((s) => s.name)
      return playerNames.includes(getPlayerName());
    }

    const updateExistingPlayersScore = (playerName, newScore) => {
      console.log(`update ${playerName}'s score to ${newScore}`);
    }

    const addNewPlayerScore = (playerName, newScore) => {
      console.log(`Adding player: ${playerName} with a score of ${newScore}`);
    }

    if (isPlayerNameAlreadyInScores()) {
      updateExistingPlayersScore(getPlayerName(), timeInSeconds);
    } else {
      addNewPlayerScore(getPlayerName(), timeInSeconds)
    }

  }

  const startGame = () => {
    startTime = Date.now();
    resetAnswers();
    welcomeScreen.close();
    endScreen.close();
    timer.start();
  }

  const resetAnswers = () => answers.forEach((answer) => answer.reset());

  const initialize = () => {
    const firebaseConfig = fireStoreConfig;
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app)
    gameContainer = createGameContainer();
    welcomeScreen = WelcomeScreen(setPlayerName, startGame);

    // const fetchAnswersFromDatabase = (db) => {
    //   console.log('getting answers')
    //   const answersCol = collection(db, 'answers');
    //   const answerSnapshot = await getDocs(answersCol);
    //   const answerList = answerSnapshot.docs.map(doc => doc.data());
    //   console.log(answerList);
    //   return answerList;
    // }

    const populateWithLocalTestingAnswers = () => {
      const answer1 = Answer({
        name: 'sebastian',
        coords: [
          [77, 100],
          [184, 100],
          [77, 228],
          [184, 228]],
        preview: {
          coords: [-150, -200],
          backgroundSize: 1000
        }
      });

      const answer2 = Answer({
        name: "limbo",
        coords: [
          [705, 488],
          [800, 488],
          [705, 645],
          [800, 645]
        ],
        preview: {
          coords: [-920, -650],
          backgroundSize: 700
        }
      });

      const answer3 = Answer({
        name: "alien humanoid",
        coords: [
          [470, 160],
          [530, 160],
          [470, 200],
          [530, 200]
        ],
        preview: {
          coords: [-1075, -350],
          backgroundSize: 1200
        }
      });

      const answer4 = Answer({
        name: "fez",
        coords: [
          [400, 420],
          [460, 420],
          [400, 480],
          [460, 480]
        ],
        preview: {
          coords: [-920, -960],
          backgroundSize: 1200
        }
      });


      const answer5 = Answer({
        name: "isaac",
        coords: [
          [690, 180],
          [750, 180],
          [690, 250],
          [750, 250]
        ],
        preview: {
          coords: [-1580, -420],
          backgroundSize: 1200
        }
      });

      answers.push(answer1);
      answers.push(answer2);
      // answers.push(answer3);
      // answers.push(answer4);
      // answers.push(answer5);

      const score1 = { name: 'josh', score: 23.32 }
      const score2 = { name: 'josh2', score: 10.11 }
      const score3 = { name: 'josh3', score: 50.33 }
      scores.push(score1);
      scores.push(score2);
      scores.push(score3);
    }

    populateWithLocalTestingAnswers();
    const ispyImage = IspyImage(answers, Selector, GuessingBox, stopGame);
    timer = Timer();
    const scoreContainer = ScoreContainer();
    scoreContainer.setScores(scores);

  }

  const endScreen = EndScreen(scores, getPlayerName, startGame);
  endScreen.toggle();

  return {
    initialize,
  }
}

export default Game;





//getAnswers(db);

