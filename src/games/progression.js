import getRandomInt from '../random-int';

const rules = 'What number is missing in the progression?';

const nextProgressionNumber = (currentNumber, progressionStep) => currentNumber + progressionStep;

const getProgressionStringWithHiddenNumber = (start, step, nElements, indexHidden) => {
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
    current = nextProgressionNumber(current, step);
  }
  return { str, hidden };
};

const nProgressionElements = 10;

const getQuestionAndAnswer = () => {
  const start = getRandomInt(0, 10);
  const step = getRandomInt(1, 5);
  const indexHidden = getRandomInt(0, nProgressionElements - 1);
  const progression = getProgressionStringWithHiddenNumber(
    start, step, nProgressionElements, indexHidden,
  );
  const question = `${progression.str}`;
  const answer = `${progression.hidden}`;
  return { question, answer };
};

export default { rules, getQuestionAndAnswer };
