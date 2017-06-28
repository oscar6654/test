import React from 'react'

const States = props => {
  return(
    <label>{props.label}
    <input
    type="text"
    name={props.name}
    onChange={props.StatesonChange}
    value={props.content}
    />
    </label>
  )
}
export default States
