import React from 'react'

const Address = props => {
  return(
    <label>{props.label}
    <input
    type="text"
    name={props.name}
    onChange={props.AddressonChange}
    value={props.content}
    />
    </label>
  )
}
export default Address
