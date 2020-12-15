import Big from 'big.js';

const operate = (numOne, numTwo, operation) => {
  const first = new Big(numOne);
  const second = new Big(numTwo);

  let answer;

  switch (operation) {
    case '+':
      answer = first.plus(second);
      break;

    case '-':
      answer = first.minus(second);
      break;

    case 'x':
      answer = first.times(second);
      break;

    case '÷':
      answer = first.div(second);
      break;

    case '%':
      answer = first.mod(second);
      break;

    default:
  }

  return answer;
};

export default operate;
