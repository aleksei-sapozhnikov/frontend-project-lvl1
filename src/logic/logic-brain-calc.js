const getRules = () => 'What is the result of the expression?';

const generateOperation = () => {
  const nOperations = 3;
  const n = Math.floor(Math.random() * nOperations);
  switch (n) {
    case 0: return '+';
    case 1: return '-';
    case 2: return '*';
    default: return 'unknown operation';
  }
};

const calculate = (n1, n2, operation) => {
  switch (operation) {
    case '+': return n1 + n2;
    case '-': return n1 - n2;
    case '*': return n1 * n2;
    default: return 'unknown operation';
  }
};

const getQuestionAnswer = () => {
  const maxNumber = 10;
  const n1 = Math.floor(Math.random() * maxNumber);
  const n2 = Math.floor(Math.random() * maxNumber);
  const op = generateOperation();
  const question = `${n1} ${op} ${n2}`;
  const answer = calculate(n1, n2, op);
  return { question, answer };
};

export default { getRules, getQuestionAnswer };
