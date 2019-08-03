import common from '../logic-common';

const getRules = () => 'What is the result of the expression?';

const generateOperation = () => {
  const nOperations = 3;
  const n = common.getRandomInt(1, nOperations);
  switch (n) {
    case 1: return '+';
    case 2: return '-';
    case 3: return '*';
    default: return null;
  }
};

const calculate = (n1, n2, operation) => {
  switch (operation) {
    case '+': return n1 + n2;
    case '-': return n1 - n2;
    case '*': return n1 * n2;
    default: return null;
  }
};

const getQuestionAnswer = () => {
  const maxNumber = 9;
  const n1 = common.getRandomInt(0, maxNumber);
  const n2 = common.getRandomInt(0, maxNumber);
  const op = generateOperation();
  const question = `${n1} ${op} ${n2}`;
  const answer = calculate(n1, n2, op);
  return { question, answer };
};

export default { getRules, getQuestionAnswer };
