import React from 'react'

const Number = props => {
  return(
    <label>{props.label}
    <input
    type="text"
    name={props.name}
    onChange={props.NumberonChange}
    value={props.content}
    />
    </label>
  )
}
export default Number
