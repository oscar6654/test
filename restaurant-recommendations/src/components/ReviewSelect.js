import React from 'react'

const ReviewSelect = props => {
  // let optionElements = props.options.map(option =>{
  //   return (
  //     <option key={option} value={option}>{option}</option>
  //   );
  // })

  return (
    <label>{props.label}
      <select name={props.name} value={props.select} onChange={props.handleOnChange}>
        <option value=""></option>
        <option value="100">5 Star</option>
        <option value="80">4 Star</option>
        <option value="60">3 Star</option>
        <option value="40">2 Star</option>
        <option value="20">1 Star</option>
      </select>
    </label>
  );
}

export default ReviewSelect
