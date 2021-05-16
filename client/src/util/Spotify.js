import axios from 'axios';

const Spotify = {
	search: (term, token) => {
		 return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
			headers : {
				Authorization : `Bearer ${token}`
			}
		})
			.then((response) => {
				return response.json();
			})
			.then((jsonResponse) => {
				if (!jsonResponse.tracks) {
					return [];
				}
				return jsonResponse.tracks.items.map((track) => {
					return {
						id     : track.id,
						name   : track.name,
						artist : track.artists[0].name,
						album  : track.album.name,
						uri    : track.uri
					};
				});
			})
			.catch((e) => console.log(e));
	},
	savePlaylist: async (name, tracks, token, userId) => {
		if (!name || !tracks.length) {
			console.log('need valid playlist input');
			return;
		}
		const trackURIs = tracks.map(e => e.uri);
		const headers = {
			'Authorization' : `Bearer ${token}`,
			 'Content-Type'  :   'application/json'
		};
	     const playlistCreationId = await axios({
			method: 'post',
			headers,
			url: `https://api.spotify.com/v1/users/${userId}/playlists`,
			dataType: 'json',
			data : {
				name
			}
		 })
		 .then(({data}) => data.id)	
		 const addTracksToPlaylistOnSpotify = await axios({
			 method  : 'post',
			 headers,
			 url: `https://api.spotify.com/v1/playlists/${playlistCreationId}/tracks`,
			 dataType: 'json',
			 data : {
				 uris: trackURIs
			 }
		 })	
		 return addTracksToPlaylistOnSpotify;
	}
};

export default Spotify;
