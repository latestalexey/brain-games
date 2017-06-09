import run from '../game-enge';
import getRandomNubmer from '../random';

const description = 'Answer "yes" if number even otherwise answer "no"';

const minNum = 1;
const maxNum = 100;

const isEven = num => num % 2 === 0;

const getPuzzle = () => {
  const num = getRandomNubmer(minNum, maxNum);
  const question = `${num}`;
  const solution = isEven(num) ? 'yes' : 'no';
  return { question, solution };
};

export default () => run(description, getPuzzle);
