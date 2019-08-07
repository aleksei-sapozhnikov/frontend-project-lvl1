import getRandomInt from '../random-int';

export const description = 'What number is missing in the progression?';

const getProgressionStringWithHiddenNumber = (start, step, nElements, indexHidden) => {
  let str = '';

  let current = start;
  for (let i = 0; i < nElements; i += 1) {
    const isHidden = i === indexHidden;
    str = isHidden ? `${str} ..` : `${str} ${current}`;
    current = start + (i + 1) * step;
  }
  str = str.trim();
  const hiddenElement = start + (indexHidden) * step;
  return { str, hiddenElement };
};

const progressionLength = 10;

export const getQuestionAndAnswer = () => {
  const start = getRandomInt(0, 10);
  const step = getRandomInt(1, 5);
  const hiddenElementIndex = getRandomInt(0, progressionLength - 1);
  const progression = getProgressionStringWithHiddenNumber(
    start, step, progressionLength, hiddenElementIndex,
  );
  return { question: String(progression.str), answer: String(progression.hiddenElement) };
};
