import React from 'react'

const LongestRecipe = props => {
  return(
    <p onClick={props.handleClick}>{props.recipe}</p>
  )
}

export default LongestRecipe
