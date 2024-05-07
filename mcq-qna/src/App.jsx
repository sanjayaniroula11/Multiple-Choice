import React from 'react';
import { useState } from 'react'
import Resources from './question.json'

import './App.css'

function App() {
  const [questionIndex, setquestionIndex] = useState(0);

 const prip = () => console.log(Resources);



  return (
    <>
    <div className="main">
    <div className="app">
      <h1>Start Playing</h1>
      <div className="question">
        <h3>1. Guess the correct height of mt. Makalu. </h3>
        <ul>
          <li>8465m</li>
          <li>8485m</li>
          <li>6725m</li>
          <li>None of the above</li>
        </ul>
      </div>
        <button 
        onClick={prip}
        className="next">
          Next
        </button>
    </div>
    </div>

    </>
  )
}

export default App
