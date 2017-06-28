import React from 'react';

const Form = props => {
  let handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Form was submitted');
  };
  return(
    <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Enter Email"/>
        <input type="submit" className="button"/>
    </form>
  );
};


export default Form;
