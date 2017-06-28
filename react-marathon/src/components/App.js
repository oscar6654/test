import React from 'react';
import PlaylistCollection from './PlaylistCollection'
import SongCollection from './SongCollection'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSongId: this.props.data.selectedSongId,
      selectedPlaylistId: this.props.data.selectedPlaylistId
    }
    this.handleSongSelect = this.handleSongSelect.bind(this)
    this.handlePlaylistSelect = this.handlePlaylistSelect.bind(this)
  }

  handlePlaylistSelect(id_val)
  {
    let newPlaylistIndex = id_val - 1
    let playlistDetails = this.props.data.playlists[newPlaylistIndex]
    let selectedPlaylistSongIds = playlistDetails.songs;
    let length = selectedPlaylistSongIds.length
    let randTrack = selectedPlaylistSongIds[Math.floor(Math.random() * length)]
    this.setState({selectedPlaylistId: id_val, selectedSongId: randTrack})
  }
  handleSongSelect(id_val){
    this.setState({selectedSongId: id_val})
  }

  render() {
    let data = this.props.data
    // let song_data = this.props.data.songs
    let selectedPlaylistSongIds = data.playlists[this.state.selectedPlaylistId-1].songs;

    let filterById = (obj) => {
      return selectedPlaylistSongIds.includes(obj.id);
    }

    let selectedPlaylistSongs = data.songs.filter(filterById);

    return (
      <div className="App row">
        <div className="small-6 columns">
          <h3>Playlists</h3>
          <PlaylistCollection
          data={data.playlists}
          selected={this.state.selectedPlaylistId}
          handlePlaylistSelect = {this.handlePlaylistSelect}
          />
        </div>
        <div className="small-6 columns">
          <h3>Songs</h3>
            <SongCollection
            data={selectedPlaylistSongs}
            selected={this.state.selectedSongId}
            handleSongSelect={this.handleSongSelect}
            />
        </div>
      </div>
    );
  }
}

export default App;
