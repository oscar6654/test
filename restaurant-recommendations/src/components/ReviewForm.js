import React from 'react'
import ReviewField from './ReviewField'
import ReviewSelect from './ReviewSelect'
// your code, here
class ReviewForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name: '',
      score: '',
      review: '',
      options: ["1 star", "2 star", "3 star", "4 star", "5 star"]
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
  }
  handleClearForm(event){
    event.preventDefault();
    this.setState({name: "", score: "", review: ""})
  }
  handleFormSubmit(event){
    event.preventDefault();
    let reviewForm = {
      restaurant_id: this.props.id,
      name: this.state.name,
      rating: parseInt(this.state.score, 10),
      content: this.state.review
    };
    this.props.submit(reviewForm)
    this.handleClearForm(event)
  }
  handleOnChange(event){
    const name = event.target.name
    this.setState({[name]:event.target.value})
  }
  render(){
    return(
      <form onSubmit={this.handleFormSubmit}>
        <ReviewField
          value={this.state.name}
          label="Name"
          name="name"
          handleOnChange={this.handleOnChange}
        />
        <ReviewSelect
          handleOnChange={this.handleOnChange}
          name='score'
          label='Score'
          options={this.state.options}
          selectedOption={this.state.mealSelected}
          select={this.score}
        />
        <ReviewField
          value={this.state.review}
          label="Review"
          name="review"
          handleOnChange={this.handleOnChange}
        />
        <div className="button-group">
          <button className="button" onClick={this.handleClearForm}>Clear</button>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}

export default ReviewForm
