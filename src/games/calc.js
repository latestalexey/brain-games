import run from '../game-enge';
import getRandomNubmer from '../random';

const minNum = 1;
const maxNum = 100;

const listOperation = ['+', '-', '*'];
const getRandomOperation = () => listOperation[getRandomNubmer(1, listOperation.length) - 1];

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
  const num1 = getRandomNubmer(minNum, maxNum);
  const num2 = getRandomNubmer(minNum, maxNum);
  const op = getRandomOperation();

  const question = `${num1} ${op} ${num2}`;
  const solution = String(calculate(num1, num2, op));
  return { question, solution };
};

const game = () => {
  const description = 'What is the result of the expression?';
  run(description, getPuzzle);
};

export default game;
