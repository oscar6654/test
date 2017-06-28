import React from 'react';
import Form from './Form.js'
const Popup = props => {
  let handleExit = (message) => {
    confirm(`Are you sure you don't want to see ${message}`)
  };
  return(
    <div>
      <Form />
      <i className="fa fa-times fa-2x" aria-hidden="true" onClick={(event) => {handleExit(props.message)}}></i>
    </div>
  );
};

export default Popup;
