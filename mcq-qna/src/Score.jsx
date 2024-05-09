import React from 'react'

function Score(props) {
  return (
    <div className='score'>
    <h2 className='your-score'> You've Scored : {props.score}</h2>
    <h2 className='your-score final'>Full Score : {props.totalScore}</h2>
        </div>
  )
}

export default Score