import {
  greet, getName, greetByName, playGame,
} from './game-process';

import { rules as rulesCalc, getQuestionAndAnswer as getQaCalc } from './games/calc';
import { rules as rulesEven, getQuestionAndAnswer as getQaEven } from './games/even';
import { rules as rulesGcd, getQuestionAndAnswer as getQaGcd } from './games/gcd';
import { rules as rulesPrime, getQuestionAndAnswer as getQaPrime } from './games/prime';
import { rules as rulesProgression, getQuestionAndAnswer as getQaProgression } from './games/progression';

const nPlays = 3;

export const calc = () => playGame(rulesCalc, getQaCalc, nPlays);
export const even = () => playGame(rulesEven, getQaEven, nPlays);
export const gcd = () => playGame(rulesGcd, getQaGcd, nPlays);
export const prime = () => playGame(rulesPrime, getQaPrime, nPlays);
export const progression = () => playGame(rulesProgression, getQaProgression, nPlays);

export const stupid = () => {
  greet();
  const name = getName();
  greetByName(name);
};
