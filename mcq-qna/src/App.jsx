import React from 'react';
import { useState } from 'react'
import Resources from './question.json'

import './App.css'

function App() {

  const [currQuestion, setCurrQuestion] = useState(0);
  const [answer, setAnswer] = useState(0);

const nextQuestion = ()=>{
  if (currQuestion < Resources.length-1){
    setCurrQuestion( currQuestion + 1 );
    setAnswer(0);
  }
  else {
    
  }

} 

const checkAnswer = ()=> {
  if (answer === Resources[currQuestion].correctAnswer){
    
  }
}

const highlightAnswer = ()=>{
  if ( option === Resources[currQuestion].correctAnswer){

  }
}

  return (
    <>
    <div className="main">
    <div className="app">
      <h1>GENERAL KNOWLEDGE</h1>
      <div className="question">
        <h3>{currQuestion + 1}. {Resources[currQuestion].question} </h3>
        <ul>
          {Resources[currQuestion].choices.map((option,indexOfOption) => {

            return <li
            className={`answer ${answer == indexOfOption+1 ? 'answer-select' : null}`}
            onClick={()=>{
              setAnswer(indexOfOption + 1 );
            }}
            >{option}</li>

    
          })}
          {/* <li>8485m</li>
          <li>6725m</li>
          <li>None of the above</li> */}
        </ul>
      </div>
        <button 
        onClick={nextQuestion}
        className="next">
          Next
        </button>
    </div>
    </div>

    </>
  )
}

export default App
