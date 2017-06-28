import React from 'react'

const Email = props => {
  return(
    <label>{props.label}
    <input
    type="text"
    name={props.name}
    onChange={props.EmailonChange}
    value={props.content}
    />
    </label>
  )
}
export default Email
