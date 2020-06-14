import React from 'react';
import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header> */}
      <NameCard name="viking" />
    </div>
  );
}

export default App;
