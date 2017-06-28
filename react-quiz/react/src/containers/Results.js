import React from 'react'

const Results = props => {
  let result;
  let color;
  let next;
  if(props.answer != null){
    if(props.answer){
      result = "Correct"
      color = "correct"
      next = <button type="button" onClick={props.fetch}>NEXT </button>
    }else{
      result = "Incorrect"
      color = "incorrect"
    }
  }
  return(
    <div>
      <center>
        <h3 className={color}>{result}</h3>
        <h2>{next}</h2>
      </center>
    </div>

  )
}

export default Results
