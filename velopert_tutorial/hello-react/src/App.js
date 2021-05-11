import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyName from './NewComponent'
import Date from './FunctionTypeComponent'
import Counter from './Counter'

function App() {
  const value = 1;
  console.log(value);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {
          1 + 1 === 2 
            ? (<div>맞아요!</div>)
            : (<div>틀려요!</div>)
        }
        {
          1 + 1 === 2 && (<div>맞아요!</div>)
        }
        {
          (function() {
            if (value === 1) return (<div>하나</div>);
            if (value === 2) return (<div>둘</div>);
            if (value === 3) return (<div>셋</div>);
          })()
        }
        {/* 주석은 이렇게! */}
        <MyName name="Alan" />
        <Date date="2020-03-08"/>
        <Counter />
      </header>
    </div>
  );
}

export default App;
