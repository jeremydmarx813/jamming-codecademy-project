const clientId = 'f03925ce76e844a79a88dbbe1f677103';
const redirectURI = 'http://localhost:3000/';
let userToken;

const Spotify = {
  getAccessToken(){
      if(userToken){
          return userToken;
      }
      const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
      const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

      if(accessTokenMatch && expiresInMatch){
          userToken = accessTokenMatch[1];
          const expirationTime = Number(expiresInMatch[1]);
          
          window.setTimeout(() => userToken = '', expirationTime * 1000);
          window.history.pushState('Access Token', null, '/');
      } else {
          window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
      }
  }
};

export default Spotify;