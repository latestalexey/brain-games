import readlineSync from 'readline-sync';

const game = () => {
  console.log('Welcome to the Brain Games!');
  console.log('');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export default game;
