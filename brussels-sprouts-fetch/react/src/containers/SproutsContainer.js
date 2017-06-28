import React, { Component } from 'react';
import RandomSprout from '../components/RandomSprout';
import SproutsIndex from '../components/SproutsIndex';
import LongestRecipe from '../components/LongestRecipe';
class SproutsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: "",
      longest: "",
      recipes: []
    }
  }

  getRandomRecipe(){
    fetch("/api/v1/random-recipe")
    .then(response => response.json())
    .then(body => {
      this.setState({recipe: body})
      this.setState({recipes: []})
      this.setState({longest: ""})
    })
    // YOUR FETCH CALL HERE
  }
  getLongestRecipe(){
    fetch("/api/v1/longest-recipe")
    .then(response => response.json())
    .then(body => {
      this.setState({longest: body})
      this.setState({recipes: []})
      this.setState({recipe: ""})
    })
    // YOUR FETCH CALL HERE
  }
  getAllRecipes(){
    fetch("/api/v1/recipes")
    .then(response => response.json())
    .then(body => {
      this.setState({recipes: body})
      this.setState({recipe: ""})
      this.setState({longest: ""})
    })
    // YOUR FETCH CALL HERE
  }

  render(){
    let handleLongestClick = () => {
      this.getLongestRecipe();
    }

    let handleRandomClick = () => {
      this.getRandomRecipe();
    }

    let handleIndexClick = () => {
      this.getAllRecipes();
    }

    return(
      <div className="container">
        <h1>Sprout Fetcher</h1>
        <RandomSprout
          recipe={this.state.recipe}
          handleClick = {this.getRandomRecipe}
        />
        <SproutsIndex
          recipes={this.state.recipes}
          handleClick={handleIndexClick}
        />
        <LongestRecipe
          recipe={this.state.longest}
          handleClick= {handleLongestClick}
        />

        <div className="buttons">
          <button onClick={this.getRandomRecipe} className="btn">Get Random Recipe</button>
          <button onClick={handleLongestClick} className="btn">Get Longest Recipe</button>
          <button onClick={handleIndexClick} className="btn">See All Recipes</button>
        </div>
      </div>
    )
  }
}

export default SproutsContainer;
