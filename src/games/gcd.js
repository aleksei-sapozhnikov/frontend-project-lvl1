import { getRandomInt } from '../utils';

export const description = 'Find the greatest common divisor of given numbers';

const findGreatestCommonDivisor = (n1, n2) => {
  const big = Math.max(n1, n2);
  const small = Math.min(n1, n2);
  if (big % small === 0) {
    return small;
  }

  return findGreatestCommonDivisor(small, big % small);
};

export const getQuestionAndAnswer = () => {
  const maxNumber = 100;
  const n1 = getRandomInt(1, maxNumber);
  const n2 = getRandomInt(1, maxNumber);
  const question = `${n1} ${n2}`;
  const answer = String(findGreatestCommonDivisor(n1, n2));
  return { question, answer };
};
