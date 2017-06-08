import run from '../game-enge';
import getRandomNubmer from '../random';

const getPuzzle = () => {
  const min = 1;
  const max = 100;

  const num1 = getRandomNubmer(min, max);
  const num2 = getRandomNubmer(min, max);

  const listOperation = ['+', '-', '*'];
  const operation = listOperation[getRandomNubmer(1, listOperation.length) - 1];
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

  return {
    question: `${num1} ${operation} ${num2}`,
    solution: String(calculate(num1, num2, operation)),
  };
};

const game = () => {
  const description = 'What is the result of the expression?';
  run(description, getPuzzle);
};

export default game;
