import readlineSync from 'readline-sync';

const showDescription = (description) => {
  console.log('Welcome to the Brain Games!');
  if (description) {
    console.log(description);
  }
};

const showSeparator = () => {
  console.log('');
};

const requestName = () => readlineSync.question('May I have your name? ');

const showGreeting = (name) => {
  console.log(`Hello, ${name}!`);
};

const showQuestion = (description) => {
  console.log(`Question: ${description}`);
};

const requesAnswer = () => readlineSync.question('Your answer: ');

const showIsCorrect = () => {
  console.log('Correct!');
};

const showSolution = (answer, correctAnswer) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
};

const showWin = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const showLoss = (name) => {
  console.log(`Let's try again, ${name}!`);
};

const make = (scheme = {}) => {
  showDescription(scheme.description);
  showSeparator();

  const name = requestName();
  showGreeting(name);

  if (scheme.numQuestions) {
    showSeparator();

    let numCorrectQuestions = 0;
    for (let i = 0; i < scheme.numQuestions; i += 1) {
      const question = scheme.makeQestion();
      showQuestion(question.description);
      const answer = requesAnswer();
      if (answer === question.answer) {
        showIsCorrect();
        numCorrectQuestions += 1;
      } else {
        showSolution(answer, question.answer);
        break;
      }
    }

    if (numCorrectQuestions === scheme.numQuestions) {
      showWin(name);
    } else {
      showLoss(name);
    }
  }
};

export default make;
