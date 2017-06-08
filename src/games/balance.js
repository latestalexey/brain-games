import run from '../game-enge';
import getRandomNubmer from '../random';

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
  const min = 1;
  const max = 10000;
  const num = getRandomNubmer(min, max);
  const question = `${num}`;
  const solution = String(balance(num));
  return { question, solution };
};

const game = () => {
  const description = 'Balance the given number.';
  const scheme = { description, getPuzzle };
  run(scheme);
};

export default game;
