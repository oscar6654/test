import React from 'react';
import List from './List';
const Picture = props => {
  let celestial =[
    {
      id: "1",
      name: "Asteroids"
    },
    {
      id: "2",
      name: "Comets"
    },
    {
      id: "3",
      name: "Moon"
    },
    {
      id: "4",
      name: "Planets"
    },
    {
      id: "5",
      name: "Stars"
    },
    {
      id: "6",
      name: "Sun"
    }
  ]
  return (
    <div className='box picture'>
      <h1>{props.title}</h1>
      <img alt='Clever EEs' src={props.source}/>
      <List list={celestial} header="Here is a List"/>
    </div>
  )
}

export default Picture;
