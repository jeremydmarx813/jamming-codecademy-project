import React, { useContext } from 'react';
import './Playlist.css';

import TrackList from '../TrackList/TrackList';
import { ProjectContext } from '../ContextProvider/ContextProvider';
import Spotify from '../../util/Spotify';
import axios from 'axios';

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
					<TrackList tracks={state.playlistTracks} isRemoval={true}/>
					<button className="pill-button playlist-pill" onClick={() => {
						Spotify.savePlaylist(state.playlistName, state.playlistTracks, state.accessToken, state.userInfo.id)
						.then(res => {
							console.log(res);
							if(res.status === 201){
                                dispatch({
									type: 'RESET_PLAYLIST'
								})
							} else {
								throw new Error(res.status)
							}
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
