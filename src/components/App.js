import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../styles/App.css';

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = buttonName => {
    const calcObj = { total, next, operation };
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
    <div className="App-container">
      <h2>Let&apos;s do some math!</h2>
      <div className="App">
        <>
          <Display result={showResult()} />
          <ButtonPanel handleClick={handleClick} />
        </>
      </div>
    </div>
  );
};

export default App;
