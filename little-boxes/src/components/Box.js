import React from 'react';
import Wrapper from './Wrapper'
const Box = props => {
  let boxClass = `box ${props.boxClass}`

  let paragraph
  if (props.paragraph) {
    paragraph = <p>{props.paragraph}</p>
  }

  return (
    <div className={boxClass}>
      <h1>{props.header}</h1>
      {paragraph}
      <Wrapper />
    </div>
  )
}

export default Box;
