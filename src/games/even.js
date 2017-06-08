import run from '../game-enge';
import getRandomNubmer from '../random';

const isEven = num => num % 2 === 0;

const getPuzzle = () => {
  const min = 1;
  const max = 100;
  const question = getRandomNubmer(min, max);
  const solution = isEven(question) ? 'yes' : 'no';
  return { question, solution };
};

const game = () => {
  const description = 'Answer "yes" if number even otherwise answer "no"';
  const scheme = { description, getPuzzle };
  run(scheme);
};

export default game;
