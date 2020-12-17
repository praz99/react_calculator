import Big from 'big.js';

const operate = (numOne, numTwo, operation) => {
  let answer;

  if (operation === '%') {
    answer = Big(numTwo).div(100);
  } else if (operation === '÷' && numTwo === '0') {
    answer = '∞';
  } else {
    const first = new Big(numOne);
    const second = new Big(numTwo);
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

      default:
    }
  }
  return answer;
};

export default operate;
