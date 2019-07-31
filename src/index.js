import readlineSync from 'readline-sync';

export const greet = () => {
  console.log('Welcome to the Brain Games!');
};

export const getName = () => readlineSync.question('May I have your name? ');

export const greetByName = (name) => {
  console.log(`Hello, ${name}!`);
};

const ask = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};

const check = (answer, correctAnswer) => {
  const wasRight = String(answer) === String(correctAnswer);
  console.log(wasRight ? 'Correct' : `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return wasRight;
};

export const playGame = (logic, nQuestions) => {
  greet();
  console.log(logic.getRules());
  console.log();

  const name = getName();
  greetByName(name);
  console.log();

  let wasRight = true;
  for (let i = 0; wasRight && i < nQuestions; i += 1) {
    const qA = logic.getQuestionAnswer();
    const answer = ask(qA.question);
    wasRight = check(answer, qA.answer);
  }

  console.log(wasRight ? `Congratulations, ${name}!` : `Let's try again, ${name}!`);
};
