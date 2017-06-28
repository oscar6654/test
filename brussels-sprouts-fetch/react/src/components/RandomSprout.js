import React from 'react';

const RandomSprout = props => {
  return(
    <p onClick={props.handleClick}>{props.recipe}</p>
  )
}

export default RandomSprout;
