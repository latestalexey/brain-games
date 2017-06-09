import run from '../game-enge';
import getRandomNubmer from '../random';

const description = 'What number is missing in this progression?';

const minNum = 1;
const maxNum = 100;
const lengthProgression = 10;

const getProgression = () => {
  const startNum = getRandomNubmer(minNum, maxNum);
  const step = getRandomNubmer(minNum, maxNum);

  const iter = (num, progression) => {
    if (progression.length === lengthProgression) {
      return progression;
    }
    progression.push(num);
    return iter(num + step, progression);
  };
  return iter(startNum, []);
};

const pierceProgression = (progression) => {
  const piercedProgression = progression.slice();
  piercedProgression.piercedIndex = getRandomNubmer(0, progression.length - 1);
  piercedProgression.piercedValue = progression[progression.piercedIndex];
  piercedProgression[progression.piercedIndex] = '..';
  return piercedProgression;
};

const progressionToString = progression => progression.join(' ');

const getPuzzle = () => {
  const piercedProgression = pierceProgression(getProgression());

  const question = progressionToString(piercedProgression);
  const solution = String(piercedProgression.piercedValue);
  return { question, solution };
};

export default () => run(description, getPuzzle);
