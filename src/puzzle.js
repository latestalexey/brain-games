import getRandomNubmer from './random';

export const getSimplePuzzle = (minNum, maxNum, solve) => {
  const num = getRandomNubmer(minNum, maxNum);
  const question = `${num}`;
  const solution = solve(num) ? 'yes' : 'no';
  return { question, solution };
};

export default getSimplePuzzle;
