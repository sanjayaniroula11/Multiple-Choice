import React from 'react'

function Score(props) {
  return (
    <div>
    You've Scored : {props.score}
    Full Score : {props.totalScore}
        </div>
  )
}

export default Score