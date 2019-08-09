#!/usr/bin/env node
import readlineSync from 'readline-sync';

const greet = () => {
  console.log('Welcome to the Brain Games!');
};

const getName = () => readlineSync.question('May I have your name? ');

const greetByName = (name) => {
  console.log(`Hello, ${name}!`);
};

greet();
const name = getName();
greetByName(name);
