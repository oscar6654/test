import React from 'react';

const StepTile = props => {

  // let handleClick = () => {
  //   props.setSelectedStep(props.id);
  // }

  return(
    <li onClick={props.setSelectedStep1} className={props.classN}>{props.step}</li>
  )
}

export default StepTile;
