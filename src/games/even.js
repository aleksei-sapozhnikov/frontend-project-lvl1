import { getRandomInt } from '../utils';
import playGame from '../game-process';

export const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const maxNumber = 100;

export const getQuestionAndAnswer = () => {
  const number = getRandomInt(0, maxNumber);
  const question = String(number);
  const answer = isEven(number) ? 'yes' : 'no';
  return { question, answer };
};

export default () => playGame(description, getQuestionAndAnswer);
