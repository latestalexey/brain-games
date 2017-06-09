#!/usr/bin/env node
import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');

  console.log('');

  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
};
