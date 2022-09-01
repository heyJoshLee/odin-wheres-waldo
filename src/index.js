import IspyImage from './IspyImage';
import Selector from './Selector';
import Answer from './Answer';
import GuessingBox from './GuessingBox';

const answers = [];

const answer1 = Answer({
  name: 'sebastian',
  coords: [
    [77, 100],
    [184, 100],
    [77, 228],
    [184, 228]],
});

const answer2 = Answer({
  name: "limbo",
  coords: [
    [705, 488],
    [800, 488],
    [705, 645],
    [800, 645]
  ]
})

answers.push(answer1);
answers.push(answer2);

const ispyImage = IspyImage(answers, Selector, GuessingBox);


const selector = Selector('#ispy-image');