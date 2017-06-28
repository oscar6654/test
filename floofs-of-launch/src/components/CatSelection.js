import React from 'react';
import CatTile from './CatTile';
const CatSelection = props => {
  let cats = props.cats.map(cat =>{
    return(
      <CatTile key = {cat.id} cats_name = {cat.name} />
    )
  })
  return(
    <div>
      {cats}
    </div>
  )
}

export default CatSelection
