import IspyImage from './IspyImage';
import Selector from './Selector';
import Answer from './Answer';
import GuessingBox from './GuessingBox';
import fireStoreConfig from '../firestore.config';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, setDoc, addDoc, limit, query, orderBy } from 'firebase/firestore/lite';
import EndScreen from './EndScreen';
import ScoreContainer from './ScoreContainer';
import { darkGray } from './Styles';
import WelcomeScreen from './WelcomeScreen';
import LoadingScreen from './LoadingScreen';
const Game = () => {
  let answers = [];
  let scores = [];
  let playerName;
  const getPlayerName = () => playerName;
  const setPlayerName = (newName) => playerName = newName;
  let startTime = null;
  let gameContainer;
  let welcomeScreen;
  let db;

  const loadingScreen = LoadingScreen()

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

  const formatTimeToString = (millis) => {
    const milliseconds = millis % 1000
    const seconds = Math.floor((millis / 1000) % 60)
    const minutes = Math.floor((millis / (60 * 1000)) % 60)
    const hours = Math.floor((millis / (3600 * 1000)) % 3600)
    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds
      }.${milliseconds}`
  }


  const stopGame = () => {
    const rawTime = Date.now() - startTime;
    endScreen.setScore(formatTimeToString(rawTime));
    updateScores(rawTime);
    endScreen.toggle();
  }

  const updateScores = (rawTime) => {
    const isPlayerNameAlreadyInScores = () => {
      let playerNames = scores.map((s) => s.name)
      return playerNames.includes(getPlayerName());
    }

    const updateExistingPlayersScore = async (playerName, newScore, db) => {
      const playerScoreObject = scores.find(score => score.name === playerName)
      const { id, name } = playerScoreObject;
      await setDoc(doc(db, 'highScores', id), {
        name,
        score: newScore
      });
    }

    const addNewPlayerScore = async (playerName, newScore, db) => {
      await addDoc(collection(db, 'highScores'), {
        name: playerName,
        score: newScore
      });
    }

    if (isPlayerNameAlreadyInScores()) {
      updateExistingPlayersScore(getPlayerName(), rawTime, db);
    } else {
      addNewPlayerScore(getPlayerName(), rawTime, db)
    }

  }

  const startGame = () => {
    startTime = Date.now();
    resetAnswers();
    welcomeScreen.close();
    endScreen.close();
  }

  const resetAnswers = () => answers.forEach((answer) => answer.reset());

  const initialize = async () => {
    loadingScreen.open();
    const firebaseConfig = fireStoreConfig;
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app)
    gameContainer = createGameContainer();

    const fetchAnswersFromDatabase = async (db) => {
      const answersCollectionRef = collection(db, 'answers');
      const q = query(answersCollectionRef, limit(1));
      const querySnapshot = await getDocs(q);
      let answerDocuments = [];
      querySnapshot.forEach((doc) => {
        answerDocuments.push({
          id: doc.id,
          ...doc.data()
        });
      })

      let answerObjectArray = answerDocuments.map((data) => { return Answer(data) });
      answers = answerObjectArray;
      loadingScreen.close();
      welcomeScreen = WelcomeScreen(setPlayerName, startGame);
      return answers;
    }
    const fetchScoresFromDatabase = async (db) => {
      const scoresCollectionRef = collection(db, 'highScores');
      const q = query(scoresCollectionRef, orderBy('score'), limit(10));
      const querySnapshot = await getDocs(q);
      let scoreDocuments = []
      querySnapshot.forEach((doc) => {
        scoreDocuments.push({
          id: doc.id,
          ...doc.data()
        });
      })
      scores = scoreDocuments;
      return scores;
    }
    await fetchAnswersFromDatabase(db);
    await fetchScoresFromDatabase(db);
    IspyImage(answers, Selector, GuessingBox, stopGame);
    const scoreContainer = ScoreContainer(formatTimeToString);
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

