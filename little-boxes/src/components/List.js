import React from 'react';

const List = props => {
  let list_of_planets = props.list.map(item => {
    return(
      <li key= {item.id}> {item.name} </li>
      )
  })
  return (
    <div className='box list'>
      <h1>{props.header}</h1>
      <ul>
        {list_of_planets}
      </ul>
    </div>
  )
}

export default List;
