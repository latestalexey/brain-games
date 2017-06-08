import run from '../game-enge';
import getRandomNubmer from '../random';

const isEven = num => num % 2 === 0;

const getPuzzle = () => {
  const min = 1;
  const max = 100;
  const num = getRandomNubmer(min, max);
  const question = `${num}`;
  const solution = isEven(num) ? 'yes' : 'no';
  return { question, solution };
};

const game = () => {
  const description = 'Answer "yes" if number even otherwise answer "no"';
  const scheme = { description, getPuzzle };
  run(scheme);
};

export default game;
