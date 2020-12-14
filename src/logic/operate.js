import Big from 'big.js';

const operate = (numOne, numTwo, operation) => {
  const first = Big(numOne);
  const second = Big(numTwo);

  switch(operation) {
    case '+':
      return first + second;
    
    case '-':
      return first - second;

    case 'x':
      return first * second;

    case '/':
      return first / second;
  }
}

export default operate;