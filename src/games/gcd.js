import run from '../game-enge';
import getRandomNubmer from '../random';

const puzzle = () => {
  const min = 1;
  const max = 100;

  const num1 = getRandomNubmer(min, max);
  const num2 = getRandomNubmer(min, max);

  const gcd = (a, b) => {
    if (a < 0) {
      return gcd(-a, b);
    } else if (b < 0) {
      return gcd(a, -b);
    } else if (a < b) {
      return gcd(b, a);
    } else if (a === 0 && b === 0) {
      return 1;
    } else if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };

  return {
    question: `${num1} ${num2}`,
    solution: String(gcd(num1, num2)),
  };
};

const game = () => {
  const scheme = {
    description: 'Find the greatest common divisor of given numbers.',
    getPuzzle: puzzle,
    roundsCount: 3,
  };

  run(scheme);
};

export default game;
