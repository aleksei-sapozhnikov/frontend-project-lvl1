import { getRandomInt } from '../utils';
import playGame from '../game-process';

const description = 'What is the result of the expression?';

const applyRandomOperation = (n1, n2) => {
  const operationsCount = 3;
  const operationIndex = getRandomInt(1, operationsCount);
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
  return {
    question: String(operationAndResult.str),
    answer: String(operationAndResult.result),
  };
};

export default () => playGame(description, getQuestionAndAnswer);
