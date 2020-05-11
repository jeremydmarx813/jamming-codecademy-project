import React from 'react';
import './Playlist.css';

import TrackList from '../TrackList/TrackList';
import { ProjConsumer } from '../ContextProvider/ContextProvider';

class Playlist extends React.Component {
	constructor(props) {
		super(props);
	}

	// handleNameChange = (event) => {
	// 	this.props.onNameChange(event.target.value);
	// };

	render() {
		return (
			<ProjConsumer>
				{({updatePlaylistName, playlistTracks, removeTrack}) => (
					<div className="Playlist">
						<input onChange={updatePlaylistName} value={this.props.playlistName} />
						<TrackList tracks={playlistTracks} onRemove={removeTrack} isRemoval={true} />
						<button className="Playlist-save" onClick={this.props.onSave}>
							SAVE TO SPOTIFY
						</button>
					</div>
				)}
			</ProjConsumer>
		);
	}
}

export default Playlist;
