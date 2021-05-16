import axios from 'axios';
// import queryString from 'query-string'
const clientId = 'f03925ce76e844a79a88dbbe1f677103';
const redirectURI = 'http://localhost:3000';
let userToken;
const corsStr = 'https://cors-anywhere.herokuapp.com/';
// const SPOTIFY_SECRET = '';


const Spotify = {
	// async getAuthToken(code) {
	// 	const data = queryString.stringify({
	// 		redirect_uri: window.location.href,
	// 		grant_type: 'authorization_code',
	// 		code,
	// 	 })
	// 	const res = await axios.post('https://accounts.spotify.com/api/token', {
	// 		data,
	// 		 headers: {
	// 			'content-type': 'application/x-www-form-urlencoded',
	// 			 Authorization: `Basic ${SPOTIFY_SECRET}`
	// 		 }
	// 	 })

	// 	 console.log('RESPONSE:', res.data)
	// 	 return res.data;
	// },

	test(){
		
      return axios.get(`${corsStr}https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectURI}&scope=playlist-modify-public&show_dialog=true`)
	},
	getAccessToken() {
		if (userToken) {
			return userToken;
		}
		const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
		const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
		//   console.log(accessTokenMatch);
		//   console.log(expiresInMatch);
		if (accessTokenMatch && expiresInMatch) {
			userToken = accessTokenMatch[1];
			const expirationTime = Number(expiresInMatch[1]);

			window.setTimeout(() => (userToken = ''), expirationTime * 1000);
			window.history.pushState('Access Token', null, '/');
		} else {
			window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectURI}&scope=playlist-modify-public`;
		}
	},
	search: (term, token) => {
		// const accessToken = await Spotify.getAccessToken();
		//  console.log(accessToken);
		 return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
			headers : {
				Authorization : `Bearer ${token}`
				// ,
				// "X-Requested-With": "XMLHttpRequest"
				
			}
		})
			.then((response) => {
				return response.json();
			})
			.then((jsonResponse) => {
				console.log(jsonResponse);
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
	savePlaylist(name, tracks, token, userId) {
		// console.log('savePlaylist test')
		if (!name || !tracks.length) {
			console.log('need valid playlist input');
			return;
		}
		// const accessToken = Spotify.getAccessToken();
		const trackURIs = tracks.map(e => e.uri);
		console.log(trackURIs);
		const headers = {
			Authorization : `Bearer ${token}`
		};
		
				return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
					headers : headers,
					method  : 'POST',
					body    : JSON.stringify({
						name : name
					})
				})
					.then((response) => response.json())
					.then((jsonResponse) => {
						console.log(jsonResponse);
						const playlistID = jsonResponse.id;
						return fetch(`/v1/users/${userId}/playlists/${playlistID}/tracks`, {
							headers : headers,
							method  : 'POST',
							body    : JSON.stringify({ URIs: trackURIs })
						});
					})
					.catch((error) => console.log(error));
			
	}
};

export default Spotify;
