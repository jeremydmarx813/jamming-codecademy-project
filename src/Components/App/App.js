import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [
        {
          name: 'name1',
          artist: 'artist1',
          album: 'album1',
          id: 1
        },
        {
          name: 'name2',
          artist: 'artist2',
          album: 'album2',
          id: 2
        },
        {
          name: 'name3',
          artist: 'artist3',
          album: 'album3',
          id: 3
        }
      ],
      playlistName: 'Test List',
      playlistTracks: [
        {
          name: 'listName1',
          artist: 'listArtist1',
          album: 'listAlbum1',
          id: 4
        },
        {
          name: 'listName2',
          artist: 'listArtist2',
          album: 'listAlbum2',
          id: 5
        },
        {
          name: 'listName3',
          artist: 'listArtist3',
          album: 'listAlbum3',
          id: 6
        }
      ]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
  }
  
  addTrack(track){
    let tunes = this.state.playlistTracks;
    if(tunes.find(tune => tune.id === track.id)){
      return;
    }
    tunes.push(track);
    this.setState({
      playlistTracks: tunes 
    });
  }

  removeTrack(track){
    let tunes = this.state.playlistTracks;
    tunes = tunes.filter(tune => tune.id !== track.id) ;
    this.setState({
      playlistTracks: tunes 
    });
  }
  
  updatePlaylistName(name){
    this.setState({
      playlistName: name
    });
  }

  savePlaylist(){
    alert('this button is workin');
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
    return trackURIs; 
  }

  render(){
    return (
     <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
        <SearchBar />
      
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
