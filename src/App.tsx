import './App.css';
import { RcMenuVert } from './components';
import { entries } from './components/layout/__stories__/menuEntries';

export const App = () => {
  return (
    <div className="App">
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <RcMenuVert entries={entries} />
        <div style={{ width: '100%', height: 'calc(100vh - 6px)', border: '2px solid red' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100vh',
            }}
          >
            <div>CONTENT GOES HERE</div>
          </div>
        </div>
      </div>
    </div>
  );
};
