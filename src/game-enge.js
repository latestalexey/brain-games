import readlineSync from 'readline-sync';

const roundsCount = 3;

const playRound = (getPuzzle, count = 0) => {
  if (count === roundsCount) {
    return true;
  }

  const puzzle = getPuzzle();
  console.log(`Question: ${puzzle.question}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === puzzle.solution) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${puzzle.solution}'.`);
    return false;
  }

  return playRound(getPuzzle, count + 1);
};

const run = (description, getPuzzle) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);

  console.log('');

  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);

  console.log('');

  if (playRound(getPuzzle)) {
    console.log(`Congratulations, ${user}!`);
  } else {
    console.log(`Let's try again, ${user}!`);
  }
};

export default run;
