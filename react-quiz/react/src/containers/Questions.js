import React from 'react'
import Question from './Question'
const Questions = props => {

  return(
    <Question
      key = {props.data.id}
      id = {props.data.id}
      body = {props.data.body}
    />
  )
}


export default Questions
