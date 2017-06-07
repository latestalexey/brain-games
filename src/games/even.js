import run from '../game-enge';
import getRandomNubmer from '../random';

const puzzle = () => {
  const min = 1;
  const max = 100;
  const num = getRandomNubmer(min, max);
  return {
    question: num,
    solution: num % 2 === 0 ? 'yes' : 'no',
  };
};

const game = () => {
  const scheme = {
    description: 'Answer "yes" if number even otherwise answer "no"',
    getPuzzle: puzzle,
    roundsCount: 3,
  };

  run(scheme);
};

export default game;
