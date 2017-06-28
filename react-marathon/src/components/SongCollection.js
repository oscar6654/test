import React from 'react';
import Song from './Song'
const SongCollection = props =>{
  let songs = props.data.map(song=>{
    let selected = null;
    let handleSongSelect = () => {
      props.handleSongSelect(song.id)
    }
    if(props.selected === song.id)
    {
      selected = "selected"
    }
    return(
      <Song
        key={song.id}
        name={song.name}
        id={song.id}
        album={song.album}
        artist={song.artist}
        select={selected}
        click = {handleSongSelect}
      />
    )
  })
  return(
    <ul>
      {songs}
    </ul>
  )


}
export default SongCollection
