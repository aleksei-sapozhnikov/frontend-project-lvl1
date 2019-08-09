import { getRandomInt } from '../utils';

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 2) {
    return true;
  }
  if (num <= 1 || num % 2 === 0) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

export const getQuestionAndAnswer = () => {
  const num = getRandomInt(1, 100);
  const question = String(num);
  const answer = isPrime(num) ? 'yes' : 'no';
  return { question, answer };
};
