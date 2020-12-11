import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
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
}

export default App;
