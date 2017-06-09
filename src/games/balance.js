import run from '../game-enge';
import getRandomNubmer from '../random';

const description = 'Balance the given number.';

const minNum = 1;
const maxNum = 10000;

const balance = (num) => {
  const str = String(num);
  const sum = str.split('').reduce((acc, element) => acc + Number(element), 0);
  const firstNum = Math.floor(sum / str.length);
  const firstNumCount = str.length - (sum % str.length);
  let balanceStr = '';
  for (let i = 0; i < firstNumCount; i += 1) {
    balanceStr += String(firstNum);
  }
  for (let i = firstNumCount; i < str.length; i += 1) {
    balanceStr += String(firstNum + 1);
  }
  return Number(balanceStr);
};

const getPuzzle = () => {
  const num = getRandomNubmer(minNum, maxNum);
  const question = `${num}`;
  const solution = String(balance(num));
  return { question, solution };
};

export default () => run(description, getPuzzle);
