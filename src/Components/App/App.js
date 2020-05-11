import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Header from '../Header/Header';
import Spotify from '../../util/Spotify';

import { ContextProvider } from '../ContextProvider/ContextProvider';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ContextProvider>
				<div>
					<Header />

					<div className="App">
						<SearchBar />

						<div className="App-playlist">
							<SearchResults />
							<Playlist
								// playlistName={this.state.playlistName}
								// playlistTracks={this.state.playlistTracks}
								// onRemove={this.removeTrack}
								// onNameChange={this.updatePlaylistName}
								// onSave={this.savePlaylist}
							/>
						</div>
					</div>
				</div>
			</ContextProvider>
		);
	}
}

export default App;
