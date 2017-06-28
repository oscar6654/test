import React from 'react';
import DogSelection from './DogSelection';
import CatSelection from './CatSelection';
const App = props => {
  return(
    <div>
      <h1>Place Fluffballs here</h1>
      <DogSelection dogs= {props.data.dogs} />
      <CatSelection cats = {props.data.cats} />
    </div>

  )
}

export default App;
