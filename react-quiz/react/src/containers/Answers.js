import React from 'react'
import Answer from './Answer'
const Answers = props =>{
  let message;
  let answers = props.data.map(answer =>
  {
    let handleAnswerSelection = () =>{
      props.handleAnswerSelect(answer.id)
      props.showResultState(answer.correct)
    }
    if(props.selected === answer.id){
      if(answer.correct){
        message = "Correct"
      }
      else{
        message = "Incorrect"
      }
    }
    return(
      <Answer
        key={answer.id}
        id={answer.id}
        question_id={answer.question_id}
        body={answer.body}
        correct={answer.correct}
        selection = {handleAnswerSelection}
      />
    )
  })
  return(
    <div>
      {answers}
      {message}
    </div>
  )
}


export default Answers
