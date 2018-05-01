import { random } from 'lodash';
import run from '../game-enge';

const description = 'Find the greatest common divisor of given numbers.';

const minNum = 1;
const maxNum = 100;

const gcd = (a, b) => {
  const absA = Math.abs(a);
  const absB = Math.abs(b);

  const min = Math.min(absA, absB);
  const max = Math.max(absA, absB);

  if (max === 0) {
    return 1;
  } else if (min === 0) {
    return max;
  }
  return gcd(min, max % min);
};

const getPuzzle = () => {
  const num1 = random(minNum, maxNum);
  const num2 = random(minNum, maxNum);

  const question = `${num1} ${num2}`;
  const solution = String(gcd(num1, num2));
  return { question, solution };
};

export default () => run(description, getPuzzle);
