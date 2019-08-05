import getRandomInt from '../random-int';

const rules = 'What is the result of the expression?';

const applyRandomOperation = (n1, n2) => {
  const nOperations = 3;
  const operationIndex = getRandomInt(1, nOperations);
  switch (operationIndex) {
    case 1: return { str: `${n1} + ${n2}`, result: n1 + n2 };
    case 2: return { str: `${n1} - ${n2}`, result: n1 - n2 };
    case 3: return { str: `${n1} * ${n2}`, result: n1 * n2 };
    default: return null;
  }
};

const getQuestionAndAnswer = () => {
  const maxNumber = 9;
  const n1 = getRandomInt(0, maxNumber);
  const n2 = getRandomInt(0, maxNumber);
  const operationAndResult = applyRandomOperation(n1, n2);
  const question = operationAndResult.str;
  const answer = operationAndResult.result;
  return { question, answer };
};

export default { rules, getQuestionAndAnswer };
