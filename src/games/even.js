import run from '../game-enge';
import getRandomNubmer from '../random';

const minNum = 1;
const maxNum = 100;

const isEven = num => num % 2 === 0;

const getPuzzle = () => {
  const num = getRandomNubmer(minNum, maxNum);
  const question = `${num}`;
  const solution = isEven(num) ? 'yes' : 'no';
  return { question, solution };
};

const game = () => {
  const description = 'Answer "yes" if number even otherwise answer "no"';
  run(description, getPuzzle);
};

export default game;
