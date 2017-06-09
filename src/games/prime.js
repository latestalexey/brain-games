import run from '../game-enge';
import getRandomNubmer from '../random';

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

const getPuzzle = () => {
  const num = getRandomNubmer(minNum, maxNum);
  const question = `${num}`;
  const solution = isPrime(num) ? 'yes' : 'no';
  return { question, solution };
};

export default () => run(description, getPuzzle);
