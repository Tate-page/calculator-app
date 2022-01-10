import logo from './logo.svg';
import './App.css';
import React from 'react';
import Calculator from "./Calculator"

function App() {
  
  return (
    <div id="EverythingButTheNav">
      <header>
        <div id="logo">
          <img alt=" a +,-,*,/ symbol arranged in a square of assorted colors" id="header-img" src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Arithmetic_symbols.svg"></img>
          <h1 id="title">Calculator App!</h1>
        </div>
      </header>
      <Calculator />
   </div>
  );
}

export default App;
