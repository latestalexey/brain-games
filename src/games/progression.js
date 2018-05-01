import { random } from 'lodash';
import run from '../game-enge';

const description = 'What number is missing in this progression?';

const minNum = 1;
const maxNum = 100;
const lengthProgression = 10;

const getProgression = () => {
  const startNum = random(minNum, maxNum);
  const step = random(minNum, maxNum);

  const iter = (num, progression) => {
    if (progression.length === lengthProgression) {
      return progression;
    }
    progression.push(num);
    return iter(num + step, progression);
  };
  return iter(startNum, []);
};

const pierceProgression = (prog) => {
  const piercedProg = prog.slice();
  piercedProg.piercedIndex = random(0, piercedProg.length - 1);
  piercedProg.piercedValue = prog[piercedProg.piercedIndex];
  piercedProg[piercedProg.piercedIndex] = '..';
  return piercedProg;
};

const progressionToString = progression => progression.join(' ');

const getPuzzle = () => {
  const progression = pierceProgression(getProgression());

  const question = progressionToString(progression);
  const solution = String(progression.piercedValue);
  return { question, solution };
};

export default () => run(description, getPuzzle);
