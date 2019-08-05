import getRandomInt from '../random-int';

const rules = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const maxNumber = 100;
const getQuestionAndAnswer = () => {
  const number = getRandomInt(0, maxNumber);
  const question = String(number);
  const answer = isEven(number) ? 'yes' : 'no';
  return { question, answer };
};

export default { rules, getQuestionAndAnswer };
