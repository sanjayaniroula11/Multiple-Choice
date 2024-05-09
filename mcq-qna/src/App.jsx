import React from "react";
import { useState } from "react";
import Resources from "./question.json";
import Score from "./Score";

import "./App.css";

function App() {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false)

  const nextQuestion = () => {
    if (currQuestion < Resources.length -1 ) {
      setCurrQuestion(currQuestion + 1);
      setAnswer('');
      checkScore()
      
    } else {
      checkScore();
      setShowScore(true)
      
    }
  };

  const checkScore = () => {
    const correctAnswer = Resources[currQuestion].correctAnswer;
    if (answer === correctAnswer){
      setScore(score + 1 )
    }

    else{

    }
  };

  const highlightAnswer = () => {

  };

  return (
    <>
      <div className="main">
        <div className="app">
          <h1>GENERAL KNOWLEDGE</h1>
          <div className="question">

            {showScore ? (
              <Score score={score} totalScore={Resources.length}  />
            ) : ( 
            <>
            <h3>
              {currQuestion + 1}. {Resources[currQuestion].question}{" "}
            </h3>
            <ul>
              {Resources[currQuestion].choices.map((option, indexOfOption) => {
                return (
                  <li
                  key={indexOfOption}
                  className={`answer-color ${
                    answer === option /* Changed to compare with choice */
                      ? "correct"
                      : null
                  }`}
                    onClick={ () => {
                      setAnswer(option);
                    }}
                  >
                    {option}
                  </li>
                );
              })}
              {/* <li>8485m</li>
          <li>6725m</li>
          <li>None of the above</li> */}
            </ul>
        
          <button onClick={nextQuestion} className="next">
            Next
          </button>
          </> 
          )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
