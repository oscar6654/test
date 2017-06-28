import React from 'react';
import PlaylistList from './PlaylistList';
const PlaylistCollection = props => {

    // let list = {this.props.data}
    let playlist = props.data.map(playlist => {
      let handlePlaylistSelect = () =>{
        props.handlePlaylistSelect(playlist.id)
      }
      let selected= null;
      if(props.selected === playlist.id){
        selected="selected"
      }
      return(
        <PlaylistList
        key={playlist.id}
        id={playlist.id}
        name={playlist.name}
        songs={playlist.songs}
        select={selected}
        click={handlePlaylistSelect}
        />
      )
    })
    return(
      <div>
        <ul>
          {playlist}
        </ul>
      </div>
    )

}



export default PlaylistCollection
