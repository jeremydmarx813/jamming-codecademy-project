import React, { useContext, useEffect } from 'react';
import './Playlist.css';

import TrackList from '../TrackList/TrackList';
import { ProjectContext } from '../ContextProvider/ContextProvider';
import Spotify from '../../util/Spotify';
import axios from 'axios';

const Playlist = ({ accessToken }) => {
	const [state, dispatch] = useContext(ProjectContext);
	useEffect(() => {
		// axios.get('https://api.spotify.com/v1/me', {
		// 	   headers: {
		// 		'Authorization' : `Bearer ${accessToken}`
		// 	  }
		// })
        // .then((response) => {
		// 	console.log(`playlist useEffect response ${response}`);
		// }).catch(err => {
		// 	console.log(err);
		// })
		fetch('https://api.spotify.com/v1/me', {
			headers: { 
				'Authorization': `Bearer ${accessToken}`
			}
		}).then((response) => {
			return response.json();
		})
		.then(jsonResponse => {
			dispatch({
				type: 'USER_INFO',
				payload: jsonResponse
			})
		}).catch(err => {
			console.log(err);
		})
	}, [accessToken])
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
					<button className="Playlist-save" onClick={() => {
						Spotify.savePlaylist(state.playlistName, state.playlistTracks, accessToken, state.userInfo.id)
						.then(res => {
							console.log(res);
						})
						.catch(err => {
							console.log(err);
						})
						// .then(res => {
						// 	dispatch({
						// 		type:'UPDATE_PLAYLIST_TRACKS',
						// 		payload: []
						// 	})
						// })
					}}>
						SAVE TO SPOTIFY
					</button>
				</div>
			
	);
};

export default Playlist;
