import { getRandomInt } from '../utils';
import playGame from '../game-process';

export const description = 'What number is missing in the progression?';

const getProgressionStringWithHiddenNumber = (start, step,
  howMuchElementWeWantToSeeInTheArithmeticProgressionStringThatTheFunctionMustReturn,
  hiddenIndex) => {
  let temporaryProgressionStringWeAreGraduallyBuildingDuringTheCycleIterations = '';

  for (let i = 0;
    i < howMuchElementWeWantToSeeInTheArithmeticProgressionStringThatTheFunctionMustReturn;
    i += 1) {
    const isHidden = i === hiddenIndex;
    temporaryProgressionStringWeAreGraduallyBuildingDuringTheCycleIterations = isHidden
      ? `${temporaryProgressionStringWeAreGraduallyBuildingDuringTheCycleIterations} ..`
      : `${temporaryProgressionStringWeAreGraduallyBuildingDuringTheCycleIterations} ${start + i * step}`;
  }
  return temporaryProgressionStringWeAreGraduallyBuildingDuringTheCycleIterations.trim();
};

const progressionLength = 10;

export const getQuestionAndAnswer = () => {
  const start = getRandomInt(0, 10);
  const step = getRandomInt(1, 5);
  const hiddenIndex = getRandomInt(0, progressionLength - 1);
  const question = getProgressionStringWithHiddenNumber(
    start, step, progressionLength, hiddenIndex,
  );
  const answer = String(start + hiddenIndex * step);
  return { question, answer };
};

export default () => playGame(description, getQuestionAndAnswer);
