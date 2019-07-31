const getRules = () => 'Answer "yes" if number even otherwise answer "no".';

const getQuestionAnswer = () => {
  const maxNumber = 100;
  const number = Math.floor(Math.random() * maxNumber);
  const isEven = number % 2 === 0;
  const answer = isEven ? 'yes' : 'no';
  return { question: number, answer };
};

export default { getRules, getQuestionAnswer };
