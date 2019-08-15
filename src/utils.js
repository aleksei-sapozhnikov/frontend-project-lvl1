export const justToFoolLinter = 'remove this export when there will be more than one export in the module';

export const getRandomInt = (min, max) => {
  if (max < min) {
    return null;
  }
  const length = max - min;
  return Math.round(Math.random() * length) + min;
};
