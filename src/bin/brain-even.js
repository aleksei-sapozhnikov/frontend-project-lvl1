#!/usr/bin/env node
import { greet, getName, greetByName } from '..';
import { printRules as printRulesEven, play as playEven } from '../brain-even-logic';

greet();
printRulesEven();
console.log();

const name = getName();
greetByName(name);
console.log();

const nQuestions = 3;
const isWinner = playEven(nQuestions);

console.log(isWinner ? `Congratulations, ${name}!` : `Let's try again, ${name}!`);
