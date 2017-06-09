import run from '../game-enge';
import getRandomNubmer from '../random';

const minNum = 1;
const maxNum = 100;

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

const getPuzzle = () => {
  const num1 = getRandomNubmer(minNum, maxNum);
  const num2 = getRandomNubmer(minNum, maxNum);

  const question = `${num1} ${num2}`;
  const solution = String(gcd(num1, num2));
  return { question, solution };
};

const game = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  run(description, getPuzzle);
};

export default game;
