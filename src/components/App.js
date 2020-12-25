import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = buttonName => {
    const calcObj = {
      total: total,
      next: next,
      operation: operation,
    }
    const result = calculate(calcObj, buttonName);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  const showResult = () => {
    const result = `${total}${operation}${next}`.replace(/null/g, '');
    return result === '' ? undefined : result;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator React</h1>
        <>
          <Display result={showResult()} />
          <ButtonPanel handleClick={handleClick} />
        </>
      </header>
    </div>
  );
};

export default App;
