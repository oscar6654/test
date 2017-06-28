import React from 'react';

const FetchButton = props => {

  return(
    <button onClick={props.setFetch}>Get Favorite Thing</button>
  )
}

export default FetchButton;
