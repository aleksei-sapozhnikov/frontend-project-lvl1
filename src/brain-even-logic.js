import readlineSync from 'readline-sync';

export const printRules = () => {
  console.log('Answer "yes" if number even otherwise answer "no".');
};

const ask = () => {
  const maxNumber = 100;
  const number = Math.floor(Math.random() * maxNumber);
  const isEven = number % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';

  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const wasRight = answer === correctAnswer;
  console.log(wasRight ? 'Correct!' : `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);

  return wasRight;
};

export const play = (nTimes) => {
  let wasRight = true;
  for (let i = 0; wasRight && i < nTimes; i += 1) {
    wasRight = ask();
  }
  return wasRight;
};
