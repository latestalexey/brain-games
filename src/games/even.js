import run from '../game-enge';
import getRandomNubmer from '../random';

const getPuzzle = () => {
  const min = 1;
  const max = 100;
  const num = getRandomNubmer(min, max);
  return {
    question: num,
    solution: num % 2 === 0 ? 'yes' : 'no',
  };
};

const game = () => {
  const description = 'Answer "yes" if number even otherwise answer "no"';
  run(description, getPuzzle);
};

export default game;
