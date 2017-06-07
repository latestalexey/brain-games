import make from './game-enge';

export const game = () => {
  make();
};

const getRandomNubmer = (minNumber, maxNubmer) =>
 Math.round((Math.random() * (maxNubmer - minNumber)) + minNumber);

export const gameEven = () => {
  const scheme = {
    description: 'Answer "yes" if number even otherwise answer "no"',
    numQuestions: 3,
  };

  scheme.makeQestion = () => {
    const minNumber = 1;
    const maxNubmer = 100;
    const num = getRandomNubmer(minNumber, maxNubmer);
    const question = {
      description: num,
      answer: num % 2 === 0 ? 'yes' : 'no',
    };
    return question;
  };

  make(scheme);
};
