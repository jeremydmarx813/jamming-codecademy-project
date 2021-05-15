import { useContext } from 'react';
import './Playlist.css';

import TrackList from '../TrackList/TrackList';
import { ProjectContext } from '../ContextProvider/ContextProvider';
import Spotify from '../../util/Spotify';

const Playlist = () => {
	const [state, dispatch] = useContext(ProjectContext);
	return (
				<div className="Playlist">
					<input
						onChange={(e) => {
							dispatch({
								type: 'UPDATE_PLAYLIST_NAME',
								payload: e.target.value
							})
						}}
						value={state.playlistName}
						name="playlistName"
						placeholder="Playlist Name"
					/>
					<TrackList tracks={state.playlistTracks} />
					<button className="Playlist-save" onClick={() => {
						Spotify.savePlaylist(state.playlistName, state.playlistTracks)
						.then(res => {
							console.log(res);
						})
						.then(res => {
							dispatch({
								type:'UPDATE_PLAYLIST_TRACKS',
								payload: []
							})
						})
						.catch(err => {
							console.log(err);
						})
					}}>
						SAVE TO SPOTIFY
					</button>
				</div>
			
	);
};

export default Playlist;
