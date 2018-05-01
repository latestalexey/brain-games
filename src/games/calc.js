import { random } from 'lodash';
import run from '../game-enge';

const description = 'What is the result of the expression?';

const minNum = 1;
const maxNum = 100;

const operations = ['+', '-', '*'];
const getRandomOperation = () => operations[random(1, operations.length) - 1];

const calculate = (a, b, op) => {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return NaN;
  }
};

const getPuzzle = () => {
  const num1 = random(minNum, maxNum);
  const num2 = random(minNum, maxNum);
  const op = getRandomOperation();

  const question = `${num1} ${op} ${num2}`;
  const solution = String(calculate(num1, num2, op));
  return { question, solution };
};

export default () => run(description, getPuzzle);
