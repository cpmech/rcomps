import logo from './logo.svg';
import './App.css';
import { RcButton, RcCard } from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div style={{ marginTop: 50, width: '90%', display: 'flex', flexWrap: 'wrap' }}>
          <div>
            <RcButton onClick={() => window.alert('Hello')}>CLICK ME</RcButton>
          </div>
          <div style={{ width: 300, color: '#484848' }}>
            <RcCard title="Good News!">A message goes here</RcCard>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
