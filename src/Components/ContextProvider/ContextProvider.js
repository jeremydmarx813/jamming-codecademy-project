import React from 'react';
import Spotify from '../../util/Spotify';
import SearchResults from '../SearchResults/SearchResults';

const ProjectContext = React.createContext();

export class ContextProvider extends React.Component {
	constructor() {
		super();
		this.state = {
			searchResultsArrayInState : [],
			// playlistName: 'New Playlist',
			// playlistTracks: [],
			term                      : '',
			headerClick               : this.headerClick,
			search                    : this.search,
			handleTermChange          : this.handleTermChange,

			addTrack                  : this.addTrack
			// ,
			// removeTrack: this.removeTrack,
			// updatePlaylistName: this.updatePlaylistName,
			// savePlaylist: this.savePlaylist
		};
	}

	headerClick = () => {
		if (!this.state.term.length) {
			console.log('TEST');
		} else {
			this.setState({
				searchResultsArrayInState  : [],
				// playlistName   : 'New Playlist',
				// playlistTracks : [],
				term : ''
			});
		}
	};

	handleTermChange = (event) => {
		this.setState({
			term : event.target.value
		});
	};

	search = (term) => {
		Spotify.search(term).then((searchResults) => {
			console.log(SearchResults);
			this.setState({
				searchResultsArrayInState : searchResults
			});
		});
	};

	addTrack = (track) => {
		let tunes = this.state.playlistTracks;
		if (tunes.find((tune) => tune.id === track.id)) {
			return;
		}
		tunes.push(track);
		this.setState({
			playlistTracks : tunes
		});
	};

	// removeTrack = (track) => {
	// 	let tunes = this.state.playlistTracks;
	// 	tunes = tunes.filter((tune) => tune.id !== track.id);
	// 	this.setState({
	// 		playlistTracks : tunes
	// 	});
	// }

	// updatePlaylistName = (name) => {
	// 	this.setState({
	// 		playlistName : name
	// 	});
	// }

	// savePlaylist = () => {
	// 	const trackURIs = this.state.playlistTracks.map((track) => track.uri);
	// 	Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
	// 		this.setState({
	// 			playlistName   : 'New Playlist',
	// 			playlistTracks : []
	// 		});
	// 	});
	// }

	render() {
		return <ProjectContext.Provider value={this.state}>{this.props.children}</ProjectContext.Provider>;
	}
}

export const ProjConsumer = ProjectContext.Consumer;
