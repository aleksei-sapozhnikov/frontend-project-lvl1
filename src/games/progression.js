import { getRandomInt } from '../utils';
import playGame from '../game-process';

export const description = 'What number is missing in the progression?';

const getProgressionString = (start, step, elementsCount, hiddenIndex) => {
  let progressionString = '';
  for (let i = 0;
    i < elementsCount;
    i += 1) {
    const isHidden = i === hiddenIndex;
    progressionString = isHidden
      ? `${progressionString} ..`
      : `${progressionString} ${start + i * step}`;
  }
  return progressionString.trim();
};

const elementsCount = 10;

export const getQuestionAndAnswer = () => {
  const start = getRandomInt(0, 10);
  const step = getRandomInt(1, 5);
  const hiddenIndex = getRandomInt(0, elementsCount - 1);
  const question = getProgressionString(
    start, step, elementsCount, hiddenIndex,
  );
  const answer = String(start + hiddenIndex * step);
  return { question, answer };
};

export default () => playGame(description, getQuestionAndAnswer);
