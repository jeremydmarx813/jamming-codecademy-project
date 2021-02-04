const clientId = 'f03925ce76e844a79a88dbbe1f677103';
const redirectURI = 'http://localhost:3000';
let userToken;

const Spotify = {
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
			window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
		}
	},
	search: async (term) => {
		const accessToken = await Spotify.getAccessToken();
		 console.log(accessToken);
		 return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
			headers : {
				Authorization : `Bearer ${accessToken}`
			}
		})
			.then((response) => {
				return response.json();
			})
			.then((jsonResponse) => {
				// console.log(jsonResponse);
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
	savePlaylist(name, trackUris) {
		if (!name || !trackUris.length) {
			console.log('need valid playlist input');
			return;
		}
		const accessToken = Spotify.getAccessToken();
		const headers = {
			Authorization : `Bearer ${accessToken}`
		};
		let userId;
		return fetch('https://api.spotify.com/v1/me', { headers: headers })
			.then((response) => {
				return response.json();
			})
			.then((jsonResponse) => {
				userId = jsonResponse.id;
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
							body    : JSON.stringify({ URIs: trackUris })
						});
					})
					.catch((error) => console.log(error));
			})
			.catch((error) => console.log(error));
	}
};

export default Spotify;
