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
    const { total, next, operation } = this.state;
    const result = calculate({ total, next, operation }, buttonName);
    this.setState({
      total: result.total,
      next: result.next,
      operation: result.operation,
    });
  }

  render() {
    const { total } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Calculator React</h1>
          <>
            <Display result={total} />
            <ButtonPanel />
          </>
        </header>
      </div>
    );
  }
}

export default App;
