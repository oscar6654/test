import React from 'react';

const PlaylistList = props => {
  return(
    <li className={props.select} onClick={props.click}>{props.name}</li>
  )
}
export default PlaylistList
