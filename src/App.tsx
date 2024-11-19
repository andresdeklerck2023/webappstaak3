import React from 'react';
import logo from './logo.svg';
import './App.css';

const backgroundColor = process.env.REACT_APP_BG_COLOR;

const appStyle = {
    backgroundColor,
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const App = () => (
    <div style={appStyle}>
        <h1>Hello, Azure Static Web Apps!</h1>
    </div>
);

export default App;




