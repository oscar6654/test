import React from 'react'

const Answer = props =>{
  return(
    <center>
    <button type="button" onClick={props.selection} className="button">
        <h5>{props.body}</h5>
    </button>
    </center>

  )
}

export default Answer
