import React from 'react';

const Song = props => {

  return(
    <li className={props.select} onClick={props.click}>{props.name}-{props.artist}</li>
  )
}

export default Song
