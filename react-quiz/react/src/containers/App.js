import React from 'react';
import Questions from './Questions'
import Answers from './Answers'
import Results from './Results'
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: null,
      result: null,
      questions: null,
      answers: null,
      fetch :false,
      question_no: 1
    }
  this.handleAnswerSelect = this.handleAnswerSelect.bind(this)
  this.showResultState = this.showResultState.bind(this)
  this.onFetchClick = this.onFetchClick.bind(this)
  }
  handleAnswerSelect(id_val){
    this.setState({id: id_val})
  }
  showResultState(answer){
    this.setState({result: answer})
  }
  onFetchClick(event){
    let start = 1

    // event.preventDefault();
    fetch("/api/v1/questions.json")
      .then(response => response.json())
      .then(body => {
        let length = body.questions.length
        this.setState({questions: body.questions[Math.floor(Math.random() * length)],answers: body.answers, fetch: true});
        // this.setState({question_no: this.state.question_no+1})
        this.setState({result: null})
      })
  }
  render(){
    let question_data = this.props.data.question
    let answer_data = this.props.data.answers
    let questions = null;
    let answers = null;
    let results = null;
    let new_answer_data;
    // console.log(this.state.questions);
    if (this.state.fetch)
    {
      console.log(this.state.answers)
      new_answer_data = this.state.answers.filter((el) => {
        return (el['question_id'] === this.state.questions.id)
      });
      console.log(new_answer_data)
      questions=
        <Questions
          data={this.state.questions}
        />
      answers=
      <Answers
        data={new_answer_data}
        handleAnswerSelect={this.handleAnswerSelect}
        selected={this.state.id}
        showResultState={this.showResultState}
      />
      results =
      <Results
        answer = {this.state.result}
        fetch = {this.onFetchClick}
      />
    }
    else{
      questions =
      <Questions
        data={question_data}
      />
      answers =
      <Answers
        data={answer_data}
        handleAnswerSelect={this.handleAnswerSelect}
        selected={this.state.id}
        showResultState={this.showResultState}
      />

    }

    return(
      <div>
        <h1>React Quiz!</h1>
        <ul>
          {questions}
          {answers}
          {results}
        </ul>
      </div>
    )
  }
}

export default App
