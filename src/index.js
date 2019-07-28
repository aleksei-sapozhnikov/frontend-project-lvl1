import readlineSync from 'readline-sync';

export const greet = () => {
  console.log('Welcome to the Brain Games!');
};

export const getName = () => readlineSync.question('May I have your name? ');

export const greetByName = (name) => {
  console.log(`Hello, ${name}!`);
};
