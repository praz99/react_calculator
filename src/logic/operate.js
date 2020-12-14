import Big from 'big.js';

const operate = (numOne, numTwo, operation) => {
  const first = Big(numOne);
  const second = Big(numTwo);

  let answer;

  switch (operation) {
    case '+':
      answer = first.plus(second);
      break;

    case '-':
      answer = first - second;
      break;

    case 'x':
      answer = first * second;
      break;

    case '/':
      answer = first / second;
      break;

    default:
  }

  return answer;
};

export default operate;
