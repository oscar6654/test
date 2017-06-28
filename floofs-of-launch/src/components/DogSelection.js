import React from 'react';
import DogTile from './DogTile';
const DogSelection = props => {
  let dogs = props.dogs.map(dog =>{
    return(
      <div className="columns small-4">
        <h4>{dog.name}</h4>
        <p>breed: {dog.breed}</p>
        <p>human: {dog.human}</p>
        <img src={`${dog.image}`} />
      </div>
    )
  })
  return(
    <div>
      {dogs}
    </div>
  )
}

export default DogSelection
