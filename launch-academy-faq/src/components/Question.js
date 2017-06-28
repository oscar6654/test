import React from 'react';

const Question = props => {
  return(
    <div onClick={props.setSelected}>
    <div className="button" >{props.plus_minus}</div>
    {props.quest}
    <p>
    {props.answer}
    </p>
    </div>
  )
}
export default Question
