import run from '../game-enge';
import { getSimplePuzzle } from '../puzzle';

const description = 'Answer "yes" if number prime otherwise answer "no"';

const minNum = 1;
const maxNum = 100;

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getPuzzle = () => getSimplePuzzle(minNum, maxNum, isPrime);

export default () => run(description, getPuzzle);
