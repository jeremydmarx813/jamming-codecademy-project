import React, { createContext, useReducer } from 'react';
import Spotify from '../../util/Spotify';

export const ProjectContext = createContext();

const stateObj = {
	        term                      : '',
		    // searchResultsArrayInState : [],
			// playlistName              : '',
			// playlistTracks            : [],
			// headerClick               : headerClick,
			// search                    : search,
			// handleTermChange          : handleTermChange,
			// addTrack                  : addTrack,
			// removeTrack               : removeTrack,
			// savePlaylist              : savePlaylist
}

const contextReducer = (state, action) => {
   switch(action.type) {
	case "UPDATE_TERM":
		return {
		  term: action.payload
		};
	 default:
		throw new Error();
   }
}

export const ContextProvider = ({children}) => {
   const [state, dispatch] = useReducer(contextReducer, stateObj);
   return (
	   <ProjectContext.Provider value={[state, dispatch]}>
            {children}
	   </ProjectContext.Provider>
   )
}

// export class ContextProvider extends React.Component {
// 	constructor() {
// 		super();
// 		// this.state = {
// 		// 	searchResultsArrayInState : [],
// 		// 	playlistName              : '',
// 		// 	playlistTracks            : [],
// 		// 	term                      : '',
// 		// 	headerClick               : this.headerClick,
// 		// 	search                    : this.search,
// 		// 	handleTermChange          : this.handleTermChange,
// 		// 	addTrack                  : this.addTrack,
// 		// 	removeTrack               : this.removeTrack,
// 		// 	savePlaylist              : this.savePlaylist
// 		// };
// 	}

// 	// headerClick = () => {
// 	// 	if (!this.state.term.length) {
// 	// 		console.log('TEST');
// 	// 	} else {
// 	// 		this.setState({
// 	// 			searchResultsArrayInState : [],
// 	// 			playlistName              : '',
// 	// 			playlistTracks            : [],
// 	// 			term                      : ''
// 	// 		});
// 	// 	}
// 	// };

// 	handleTermChange = (event) => {
// 		this.setState({
// 			[event.target.name]: event.target.value
// 		});
// 	};

// 	search = (term) => {
// 		console.log(term);
// 		// console.log(Spotify.search(term))
// 		Spotify.test().then(res => console.log(res));
// 		// Spotify.search(term).then((searchResults) => {
// 		// 	// console.log(searchResults);
// 		// 	this.setState({
// 		// 		searchResultsArrayInState : searchResults
// 		// 	});
// 		// });
// 	};

// 	// addTrack = (track) => {
// 	// 	let tunes = this.state.playlistTracks;
// 	// 	if (tunes.find((tune) => tune.id === track.id)) {
// 	// 		return;
// 	// 	}
// 	// 	tunes.push(track);
// 	// 	this.setState({
// 	// 		playlistTracks : tunes
// 	// 	});
// 	// };

// 	// removeTrack = (track) => {
// 	// 	let tunes = this.state.playlistTracks;
// 	// 	tunes = tunes.filter((tune) => tune.id !== track.id);
// 	// 	this.setState({
// 	// 		playlistTracks : tunes
// 	// 	});
// 	// };

// 	// savePlaylist = () => {
// 	// 	const trackURIs = this.state.playlistTracks.map((track) => track.uri);
// 	// 	if (this.state.playlistTracks.length && this.state.playlistName.length) {
// 	// 		Spotify.savePlaylist(this.state.playlistName, trackURIs).then((response) => {
// 	// 			console.log(response);
// 	// 			this.setState({
// 	// 				playlistName              : '',
// 	// 				playlistTracks            : [],
// 	// 				searchResultsArrayInState : [],
// 	// 				term                      : ''
// 	// 			});
// 	// 		}, console.log);
// 	// 	} else {
// 	// 		console.log('playlist input needed');
// 	// 	}
// 	// };

// 	render() {
// 		return <ProjectContext.Provider value={this.state}>{this.props.children}</ProjectContext.Provider>;
// 	}
// }

// export const ProjConsumer = ProjectContext.Consumer;
