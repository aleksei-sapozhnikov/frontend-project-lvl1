import {
  greet, getName, greetByName, playGame,
} from './game-process';

import logicCalc from './games/calc';
import logicEven from './games/even';
import logicGcd from './games/gcd';
import logicPrime from './games/prime';
import logicProgression from './games/progression';

const nPlays = 3;

export const calc = () => playGame(logicCalc, nPlays);
export const even = () => playGame(logicEven, nPlays);
export const gcd = () => playGame(logicGcd, nPlays);
export const prime = () => playGame(logicPrime, nPlays);
export const progression = () => playGame(logicProgression, nPlays);

export const stupid = () => {
  greet();
  const name = getName();
  greetByName(name);
};
