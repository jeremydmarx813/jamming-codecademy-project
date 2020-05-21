import React from 'react';
import './Playlist.css';

import TrackList from '../TrackList/TrackList';
import { ProjConsumer } from '../ContextProvider/ContextProvider';

const Playlist = () => {
	return (
		<ProjConsumer>
			{({ playlistName, playlistTracks, removeTrack, savePlaylist, handleTermChange }) => (
				<div className="Playlist">
					<input
						onChange={handleTermChange}
						value={playlistName}
						name="playlistName"
						placeholder="Playlist Name"
					/>
					<TrackList tracks={playlistTracks} buttonFunc={removeTrack} isRemoval={true} />
					<button className="Playlist-save" onClick={savePlaylist}>
						SAVE TO SPOTIFY
					</button>
				</div>
			)}
		</ProjConsumer>
	);
};

export default Playlist;
