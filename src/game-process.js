import readlineSync from 'readline-sync';

const greet = () => {
  console.log('Welcome to the Brain Games!');
};

const getName = () => readlineSync.question('May I have your name? ');

const greetByName = (name) => {
  console.log(`Hello, ${name}!`);
};

const ask = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};

const check = (answer, correctAnswer) => {
  const wasRight = answer === correctAnswer;
  console.log(wasRight ? 'Correct' : `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return wasRight;
};

const questionCount = 3;

export default (description, getQuestionAndAnswer) => {
  greet();
  console.log(description);
  console.log();

  const name = getName();
  greetByName(name);
  console.log();

  let wasRight = true;
  for (let i = 0; wasRight && i < questionCount; i += 1) {
    const questionAndAnswer = getQuestionAndAnswer();
    const [question, rightAnswer] = [questionAndAnswer.question, questionAndAnswer.answer];
    const answer = ask(question);
    wasRight = check(answer, rightAnswer);
  }

  console.log(wasRight ? `Congratulations, ${name}!` : `Let's try again, ${name}!`);
};
