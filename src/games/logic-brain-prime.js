import common from '../logic-common';

const getRules = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 2) {
    return true;
  }
  if (num === 1 || num % 2 === 0) {
    return false;
  }

  let prime = true;
  for (let i = 3; prime && i <= Math.sqrt(num); i += 2) {
    prime = num % i !== 0;
  }

  return prime;
};

const getQuestionAnswer = () => {
  const num = common.getRandomInt(1, 100);
  const question = String(num);
  const answer = isPrime(num) ? 'yes' : 'no';
  return { question, answer };
};

export default { getRules, getQuestionAnswer };
