import run from '../game-enge';
import { getSimplePuzzle } from '../puzzle';

const description = 'Answer "yes" if number even otherwise answer "no"';

const minNum = 1;
const maxNum = 100;

const isEven = num => num % 2 === 0;

const getPuzzle = () => getSimplePuzzle(minNum, maxNum, isEven);

export default () => run(description, getPuzzle);
