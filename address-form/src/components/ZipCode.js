import React from 'react'

const ZipCode = props => {
  return(
    <label>{props.label}
    <input
    type="text"
    name={props.name}
    onChange={props.ZiponChange}
    value={props.content}
    />
    </label>
  )
}
export default ZipCode
