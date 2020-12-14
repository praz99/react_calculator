import Operate from './operate';

const calculate = (calcObj, btnName) => {
  const { total, next, operation } = calcObj;

  if(btnName === '+/-') {
    if(total) {
      return total * -1;
    }
    return next * -1;
  } else if(btnName === '%') {
    if(total) {
      return Operate(total, 100, '/');
    }
    return Operate(next, 100, '/')
  } else {
    return Operate(total, next, operation);
  }
};

export default calculate;
