import { random } from 'lodash';

export const getSimplePuzzle = (minNum, maxNum, solve) => {
  const num = random(minNum, maxNum);
  const question = `${num}`;
  const solution = solve(num) ? 'yes' : 'no';
  return { question, solution };
};

export default getSimplePuzzle;
