import { repeat, random } from 'lodash';
import run from '../game-enge';

const description = 'Balance the given number.';

const minNum = 1;
const maxNum = 10000;

const balance = (num) => {
  const str = String(num);
  const { length } = str;
  const sum = str.split('').reduce((acc, element) => acc + Number(element), 0);

  const firstNum = Math.floor(sum / length);
  const firstLength = length - (sum % length);
  const secondNum = firstNum + 1;
  const secondLength = length - firstLength;

  const firstStr = repeat(String(firstNum), firstLength);
  const secondStr = repeat(String(secondNum), secondLength);
  return Number(`${firstStr}${secondStr}`);
};

const getPuzzle = () => {
  const num = random(minNum, maxNum);
  const question = `${num}`;
  const solution = String(balance(num));
  return { question, solution };
};

export default () => run(description, getPuzzle);
