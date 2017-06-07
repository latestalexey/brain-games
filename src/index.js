import make from './game-enge';

export const game = () => {
  make();
};

const getRandomNubmer = (min, max) =>
 Math.round((Math.random() * (max - min)) + min);

export const gameEven = () => {
  const scheme = {
    description: 'Answer "yes" if number even otherwise answer "no"',
    questionsCount: 3,
  };

  scheme.makePuzzle = () => {
    const min = 1;
    const max = 100;
    const num = getRandomNubmer(min, max);
    const puzzle = {
      question: num,
      solution: num % 2 === 0 ? 'yes' : 'no',
    };
    return puzzle;
  };

  make(scheme);
};

export const gameCalc = () => {
  const scheme = {
    description: 'What is the result of the expression?',
    questionsCount: 3,
  };

  scheme.makePuzzle = () => {
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

    const puzzle = {
      question: `${num1} ${operation} ${num2}`,
      solution: String(calculate(num1, num2, operation)),
    };
    return puzzle;
  };

  make(scheme);
};
