import React, { Component } from 'react';
import StepTile from '../components/StepTile';
import ItemTile from '../components/ItemTile';
import FetchButton from '../components/FetchButton';

class InstructionsContainer
 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      directions: null,
      fetch: false
    }
  this.setId = this.setId.bind(this);
  this.onFetchClick = this.onFetchClick.bind(this);
  }
  setId(params){
    this.setState({id: params})
  }
  onFetchClick(event){
    // event.preventDefault();
    fetch("/api/v1/favorite_things.json")
      .then(response => response.json())
      .then(body => {
        // console.log(body.directions[0].id);
        this.setState({directions: body.directions,fetch: true});
      })
  }
  render(){
    // console.log(this.state.directions);
    // console.log(this.state);
    let supplies = this.props.data.supplies
    // let directions = this.props.data.directions
    let directions = this.state.directions
    let items = supplies.map(supply => {
      return(
        <ItemTile
        item={supply.item}
        key={supply.id}
        id={supply.id}
        />
      )
    })
    let steps = null;
    let className = null;
    if (this.state.fetch)
    {
      console.log(directions);
      steps = directions.map(direction => {
        let setSelectedStep () =>{
          this.setId(direction.id)
        }
        // let className;
        if (direction.id == this.state.id){
          className = "selected"
        }
        else{
          className = ""
        }
        return(
          <StepTile
            step={direction.step}
            key={direction.id}
            id={direction.id}
            setSelectedStep1={setSelectedStep}
            classN = {className}
          />
        )
      })
    }
    else{
      steps = "Loading...";
    }


    return(
      <div>
        <h1>How To {this.props.data.activity}</h1>
        <h3>Supplies:</h3>
        <ul>
          {items}
        </ul>
        <h3>Instructions:</h3>
        <ol>
          {steps}
        </ol>
        <FetchButton setFetch={this.onFetchClick}/>
      </div>
    )
  }
}

export default InstructionsContainer
;
