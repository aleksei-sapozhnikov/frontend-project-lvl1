export default (min, max) => {
  if (max < min) {
    return null;
  }
  const length = max - min;
  return Math.round(Math.random() * length) + min;
};
