import Display from './Display';
import ButtonPanel from './ButtonPanel';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1>Calculator React</h1>
      <>
        <Display result={10} />
        <ButtonPanel />
      </>
    </header>
  </div>
);

export default App;
