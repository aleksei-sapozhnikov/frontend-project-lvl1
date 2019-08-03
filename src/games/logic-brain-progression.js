import common from '../logic-common';

const getRules = () => 'What number is missing in the progression?';

const getProgressionStringWithHiddenNumber = (start, step, nElements, indexHidden) => {
  const nextNumber = (currentNumber, progressionStep) => currentNumber + progressionStep;

  let hidden = null;
  let str = '';

  let current = start;
  for (let i = 0; i < nElements; i += 1) {
    const isHidden = i === indexHidden;
    if (isHidden) {
      hidden = current;
      str = `${str} ..`;
    } else {
      str = `${str} ${current}`;
    }
    current = nextNumber(current, step);
  }
  return { str, hidden };
};

const getQuestionAnswer = () => {
  const start = common.getRandomInt(0, 10);
  const step = common.getRandomInt(1, 5);
  const nElements = 10;
  const hiddenStep = common.getRandomInt(1, nElements);
  const progression = getProgressionStringWithHiddenNumber(start, step, nElements, hiddenStep);
  const question = `${progression.str}`;
  const answer = `${progression.hidden}`;
  return { question, answer };
};

export default { getRules, getQuestionAnswer };
