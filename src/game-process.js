import readlineSync from 'readline-sync';

import { description as descriptionCalc, getQuestionAndAnswer as getQuestionAndAnswerCalc } from './games/calc';
import { description as descriptionEven, getQuestionAndAnswer as getQuestionAndAnswerEven } from './games/even';
import { description as descriptionGcd, getQuestionAndAnswer as getQuestionAndAnswerGcd } from './games/gcd';
import { description as descriptionPrime, getQuestionAndAnswer as getQuestionAndAnswerPrime } from './games/prime';
import { description as descriptionProgression, getQuestionAndAnswer as getQuestionAndAnswerProgression } from './games/progression';

const greet = () => {
  console.log('Welcome to the Brain Games!');
};

const getName = () => readlineSync.question('May I have your name? ');

const greetByName = (name) => {
  console.log(`Hello, ${name}!`);
};

const ask = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};

const check = (answer, correctAnswer) => {
  const wasRight = answer === correctAnswer;
  console.log(wasRight ? 'Correct' : `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return wasRight;
};

const numberOfQuestionsTheGameMustAskUserAndGetRightAnswersToSayThatTheUserIsAWinner = 3;

const playGame = (description, getQuestionAndAnswer) => {
  greet();
  console.log(description);
  console.log();

  const name = getName();
  greetByName(name);
  console.log();

  let wasRight = true;
  for (let i = 0;
    wasRight && i < numberOfQuestionsTheGameMustAskUserAndGetRightAnswersToSayThatTheUserIsAWinner;
    i += 1) {
    const questionAndAnswer = getQuestionAndAnswer();
    const [question, rightAnswer] = [questionAndAnswer.question, questionAndAnswer.answer];
    const answer = ask(question);
    wasRight = check(answer, rightAnswer);
  }

  console.log(wasRight ? `Congratulations, ${name}!` : `Let's try again, ${name}!`);
};

export const playCalc = () => playGame(descriptionCalc, getQuestionAndAnswerCalc);
export const playEven = () => playGame(descriptionEven, getQuestionAndAnswerEven);
export const playGcd = () => playGame(descriptionGcd, getQuestionAndAnswerGcd);
export const playPrime = () => playGame(descriptionPrime, getQuestionAndAnswerPrime);
export const playProgression = () => playGame(
  descriptionProgression, getQuestionAndAnswerProgression,
);
