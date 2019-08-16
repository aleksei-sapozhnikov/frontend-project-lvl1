export const identity = val => val;

export const getRandomInt = (min, max) => {
  if (max < min) {
    return null;
  }
  const length = max - min;
  return Math.round(Math.random() * length) + min;
};
