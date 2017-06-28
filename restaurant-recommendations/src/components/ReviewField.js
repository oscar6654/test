import React from 'react'

const ReviewField = props => {

  return(
    <label>{props.label}
    <input
    name={props.name}
    value={props.value}
    type="text"
    onChange={props.handleOnChange}
    />
    </label>
  )
}
export default ReviewField
