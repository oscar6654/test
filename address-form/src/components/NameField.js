import React from 'react'

const NameField = props => {
  return(
    <label>{props.label}
    <input
    type="text"
    name={props.name}
    onChange={props.NameonChange}
    value={props.content}
    />
    </label>
  )
}
export default NameField
