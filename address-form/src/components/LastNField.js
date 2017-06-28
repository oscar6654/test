import React from 'react'

const LastNField = props => {
  return(
    <label>{props.label}
    <input
    type="text"
    name={props.name}
    onChange={props.LastNameonChange}
    value={props.content}
    />
    </label>
  )
}
export default LastNField
