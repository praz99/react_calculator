import operate from './operate';

const calculate = (calcObj, btnName) => {
  const { total, next, operation } = calcObj;

  if (btnName === '+/-') {
    if (total) {
      return total * -1;
    }
    return next * -1;
  }

  if (btnName === '%') {
    if (total) {
      return operate(total, 100, '/');
    }
    return operate(next, 100, '/');
  }

  return operate(total, next, operation);
};

export default calculate;
