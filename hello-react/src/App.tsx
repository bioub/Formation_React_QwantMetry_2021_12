import './App.css';

import React, { useState } from 'react';

import CounterProps from './CounterProps';
import CounterState from './CounterState';
import { Counter } from './features/counter/Counter';
import Hello from './Hello';
import HelloProps from './HelloProps';
import HelloState from './HelloState';
import logo from './logo.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <Hello />
        <HelloProps name="Romain" /> {/* React.createElement(HelloProps, { name: 'Romain' }) */}
        <HelloProps /> {/* React.createElement(HelloProps, { }) */}
        <HelloState />
        <h2>CounterState</h2>
        <CounterState />
        <CounterState />
        <h2>CounterProps</h2>
        <CounterProps count={count} setCount={setCount} />
        <CounterProps count={count} setCount={setCount} />
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
