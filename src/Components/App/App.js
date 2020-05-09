import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
// import Header from '../Header/Header';
import Spotify from '../../util/Spotify';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [],
      playlistName: 'New Playlist',
      playlistTracks: []
    }
  }
  
  addTrack = track =>{
    let tunes = this.state.playlistTracks;
    if(tunes.find(tune => tune.id === track.id)){
      return;
    }
    tunes.push(track);
    this.setState({
      playlistTracks: tunes 
    });
  }

  removeTrack = track => {
    let tunes = this.state.playlistTracks;
    tunes = tunes.filter(tune => tune.id !== track.id) ;
    this.setState({
      playlistTracks: tunes 
    });
  }
  
  updatePlaylistName = name => {
    this.setState({
      playlistName: name
    });
  }

  savePlaylist = () => {
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      });
    }); 
  }

  search = term => {
    Spotify.search(term).then(searchResults => {
      this.setState({
         searchResults: searchResults
      });
    })
  }

  headerClick = () => {
    this.setState({
      searchResults: [],
      playlistName: 'New Playlist',
      playlistTracks: []
    });
  }

  render(){
    return (
     <div>
        
        <h1 onClick={this.headerClick}>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
        <SearchBar onSearch={this.search} headerClick={this.headerClick} />
      
         <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
          <Playlist playlistName={this.state.playlistName} 
                    playlistTracks={this.state.playlistTracks}
                    onRemove={this.removeTrack}
                    onNameChange={this.updatePlaylistName}
                    onSave={this.savePlaylist} />
         </div>
       </div>
     </div>
    );
  }
}

export default App;
