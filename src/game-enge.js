import readlineSync from 'readline-sync';

const playRound = (count, getPuzzle) => {
  if (count === 0) {
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

  return playRound(count - 1, getPuzzle);
};

const run = (scheme) => {
  console.log('Welcome to the Brain Games!');
  console.log(scheme.description);

  console.log('');

  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);

  console.log('');

  if (playRound(scheme.roundsCount, scheme.getPuzzle)) {
    console.log(`Congratulations, ${user}!`);
  } else {
    console.log(`Let's try again, ${user}!`);
  }
};

export default run;
