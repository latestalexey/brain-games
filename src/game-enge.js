import readlineSync from 'readline-sync';

const make = (scheme = {}) => {
  console.log('Welcome to the Brain Games!');
  if (scheme.description) {
    console.log(scheme.description);
  }

  console.log('');

  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);

  if (scheme.questionsCount) {
    console.log('');

    let correctQuestionsCount = 0;
    for (let i = 0; i < scheme.questionsCount; i += 1) {
      const puzzle = scheme.makePuzzle();
      console.log(`Question: ${puzzle.question}`);
      const answer = readlineSync.question('Your answer: ');
      if (answer === puzzle.solution) {
        console.log('Correct!');
        correctQuestionsCount += 1;
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${puzzle.solution}'.`);
        break;
      }
    }

    if (correctQuestionsCount === scheme.questionsCount) {
      console.log(`Congratulations, ${user}!`);
    } else {
      console.log(`Let's try again, ${user}!`);
    }
  }
};

export default make;
