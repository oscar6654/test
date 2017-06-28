import React from 'react';
import Grocery from './Grocery';
const GroceryList = props => {
  let grocery = props.groceries.map(item => {
    return(
      <Grocery name={item.name} key={item.id} popup={props.handleButtonClick}/>
    )
  })
  return(
      <div>
        <h1>Grocery List</h1>
        <ul>
          {grocery}
        </ul>
      </div>
  )
}
export default GroceryList;
