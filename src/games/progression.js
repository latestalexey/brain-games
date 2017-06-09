import run from '../game-enge';
import getRandomNubmer from '../random';

const minNum = 1;
const maxNum = 100;
const lengthProgression = 10;

const getRandomProgression = () => {
  const startNum = getRandomNubmer(minNum, maxNum);
  const step = getRandomNubmer(minNum, maxNum);
  const progression = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    progression[i] = startNum + (i * step);
  }
  return progression;
};

const getPuzzle = () => {
  const progression = getRandomProgression();
  const hiddenIndex = getRandomNubmer(0, progression.length - 1);
  const hiddenValue = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');
  const solution = String(hiddenValue);
  return { question, solution };
};

const game = () => {
  const description = 'What number is missing in this progression?';
  run(description, getPuzzle);
};

export default game;
