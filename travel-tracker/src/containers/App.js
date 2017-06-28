import React, { Component } from 'react';
import RequirementsBox from '../components/RequirementsBox';
import data from '../constants/data'
import styles from '../stylesheets/index.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: []
    }
    this.onhandleClick = this.onhandleClick.bind(this);
    this.resetSateClick = this.resetSateClick.bind(this);
  }
resetSateClick(event){
  event.preventDefault();
  this.setState({id: []})
}
onhandleClick(id_val){
  let newList = this.state.id.concat(id_val)
  this.setState({id: newList})
}
  render() {
    let places = this.props.data.places;
    let wishlist = places.map(place => {
      let selected = null;
      if (this.state.id.includes(place.id)){
        console.log("selected")
        selected="selected"
      }

      let onClickWish = () => {
        this.onhandleClick(place.id)
      }
      return(
        <RequirementsBox
        key={place.id}
        name={place.name}
        classN={selected}
        setSelected={onClickWish}
        />
      )
    })
    return (
      <div id="wishlist-div">
        <div className="row">
          <div className="small-12 small-centered columns text-center">
            <h3>Wanderlust Wishlist</h3>
          </div>
          {wishlist}
        </div>
        <button onClick={this.resetSateClick}>Click</button>
      </div>
    );
  }
}

export default App;
