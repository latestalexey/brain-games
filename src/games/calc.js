import run from '../game-enge';
import getRandomNubmer from '../random';

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
  const min = 1;
  const max = 100;

  const num1 = getRandomNubmer(min, max);
  const num2 = getRandomNubmer(min, max);

  const listOperation = ['+', '-', '*'];
  const op = listOperation[getRandomNubmer(1, listOperation.length) - 1];

  const question = `${num1} ${op} ${num2}`;
  const solution = String(calculate(num1, num2, op));
  return { question, solution };
};

const game = () => {
  const description = 'What is the result of the expression?';
  const scheme = { description, getPuzzle };
  run(scheme);
};

export default game;
