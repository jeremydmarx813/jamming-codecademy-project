import React from 'react';
import './Playlist.css';

import TrackList from '../TrackList/TrackList';
import { ProjConsumer } from '../ContextProvider/ContextProvider';

class Playlist extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<ProjConsumer>
				{({playlistName, updatePlaylistName, playlistTracks, removeTrack, savePlaylist}) => (
					<div className="Playlist">
						<input onChange={updatePlaylistName} value={playlistName} />
						<TrackList tracks={playlistTracks} buttonFunc={removeTrack} isRemoval={true} />
						<button className="Playlist-save" onClick={savePlaylist}>
							SAVE TO SPOTIFY
						</button>
					</div>
				)}
			</ProjConsumer>
		);
	}
}

export default Playlist;
