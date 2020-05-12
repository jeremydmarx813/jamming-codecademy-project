import React from 'react';
import Spotify from '../../util/Spotify';

const ProjectContext = React.createContext({
	// searchResults: [],
	// playlistName: 'New Playlist',
	// playlistTracks: [],
	// term: '',
	headerClick : () => {}
	// ,
	// search: () => {},
	// handleTermChange: () => {},
	// addTrack: () => {},
	// removeTrack: () => {},
	// updatePlaylistName: () => {},
	// savePlaylist: () => {},
	// handleNameChange: () => {}
});

export class ContextProvider extends React.Component {
	constructor() {
		super();
		this.state = {
			// searchResults: [],
			// playlistName: 'New Playlist',
			// playlistTracks: [],
			// term: '',
			headerClick : this.headerClick
			// ,
			// search: this.search,
			// handleTermChange: this.handleTermChange,
			// addTrack: this.addTrack,
			// removeTrack: this.removeTrack,
			// updatePlaylistName: this.updatePlaylistName,
			// savePlaylist: this.savePlaylist
		};
	}

	// addTrack = (track) => {
	// 	let tunes = this.state.playlistTracks;
	// 	if (tunes.find((tune) => tune.id === track.id)) {
	// 		return;
	// 	}
	// 	tunes.push(track);
	// 	this.setState({
	// 		playlistTracks : tunes
	// 	});
	// };

	// removeTrack = (track) => {
	// 	let tunes = this.state.playlistTracks;
	// 	tunes = tunes.filter((tune) => tune.id !== track.id);
	// 	this.setState({
	// 		playlistTracks : tunes
	// 	});
	// };

	// updatePlaylistName = (name) => {
	// 	this.setState({
	// 		playlistName : name
	// 	});
	// };

	// savePlaylist = () => {
	// 	const trackURIs = this.state.playlistTracks.map((track) => track.uri);
	// 	Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
	// 		this.setState({
	// 			playlistName   : 'New Playlist',
	// 			playlistTracks : []
	// 		});
	// 	});
	// };

	// search = (term) => {
	// 	Spotify.search(term).then((searchResults) => {
	// 		this.setState({
	// 			searchResults : searchResults
	// 		});
	// 	});
	// };

	// handleTermChange = (event) => {
	// 	this.setState({
	// 		term : event.target.value
	// 	});
	// };

	headerClick = () => {
		console.log('TEST');
		// this.setState({
		// 	searchResults  : [],
		// 	playlistName   : 'New Playlist',
		//     playlistTracks : [],
		//     term: ''
		// });
	};

	render() {
		return <ProjectContext.Provider value={this.state}>{this.props.children}</ProjectContext.Provider>;
	}
}

export const ProjConsumer = ProjectContext.Consumer;
