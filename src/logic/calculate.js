import operate from './operate';

const calculate = (calcObj, btnName) => {
  let { total, next, operation } = calcObj;
  const calcSymbols = ['+', '-', '÷', 'x', '%'];
  if (btnName === 'AC' || total === '∞') {
    total = null;
    next = null;
    operation = null;
  } else if (btnName === '=') {
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  } else if (calcSymbols.includes(btnName)) {
    if (btnName === '%') {
      if (!next) {
        next = total;
      }
      operation = btnName;
      total = operate(null, next, operation);
      next = null;
      operation = null;
    } else if (total && next && operation) {
      total = operate(total, next, operation);
      operation = btnName;
      next = null;
    } else if (next && !operation) {
      total = next;
      operation = btnName;
      next = null;
    } else {
      operation = btnName;
    }
  } else if (btnName === '+/-') {
    if (next) {
      next = operate(next, '-1', 'x');
    } else if (total) {
      total = operate(total, '-1', 'x');
    }
  } else if (next === null && operation === null && total) {
    next = btnName;
    total = null;
  } else if (next) {
    if (btnName !== '.' || (btnName === '.' && next.indexOf(btnName) < 0)) {
      next = next.concat(btnName);
    }
  } else {
    next = btnName;
  }
  return {
    total,
    next,
    operation,
  };
};

export default calculate;
