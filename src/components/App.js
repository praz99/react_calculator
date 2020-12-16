import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = buttonName => {
    const result = calculate(this.state, buttonName);
    this.setState(result);
  }

  showResult() {
    const { total, next, operation } = this.state;
    const result = `${total}${operation}${next}`.replace(/null/g, '');
    return result === '' ? undefined : result;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Calculator React</h1>
          <>
            <Display result={this.showResult()} />
            <ButtonPanel handleClick={this.handleClick} />
          </>
        </header>
      </div>
    );
  }
}

export default App;
