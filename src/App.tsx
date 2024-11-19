import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={appStyle} className="App">
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
      </header>
    </div>
  );
}

const backgroundColor = process.env.REACT_APP_BG_COLOR;

const appStyle = {
    backgroundColor,
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};



export default App;
