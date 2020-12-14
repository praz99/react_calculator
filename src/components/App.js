import Display from './Display';
/* eslint-disable no-unused-vars */

import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1>Calculator React</h1>
      <>
        <Display />
        <ButtonPanel />
      </>
    </header>
  </div>
);

export default App;
