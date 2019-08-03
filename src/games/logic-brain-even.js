import common from '../logic-common';

const getRules = () => 'Answer "yes" if number even otherwise answer "no".';

const getQuestionAnswer = () => {
  const maxNumber = 100;
  const number = common.getRandomInt(0, maxNumber);
  const isEven = number % 2 === 0;
  const question = `${number}`;
  const answer = isEven ? 'yes' : 'no';
  return { question, answer };
};

export default { getRules, getQuestionAnswer };
