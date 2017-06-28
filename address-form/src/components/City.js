import React from 'react'

const City = props => {
  return(
    <label>{props.label}
    <input
    type="text"
    name={props.name}
    onChange={props.CityonChange}
    value={props.content}
    />
    </label>
  )
}
export default City
