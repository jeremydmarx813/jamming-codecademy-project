import React from 'react'
// import { useAuth0 } from '@auth0/auth0-react';
// import { Redirect } from 'react-router-dom';


function LoginPage() {
    
    const clientId = 'f03925ce76e844a79a88dbbe1f677103';
    const redirectURI = 'http://localhost:3000/';
    const spotifyAuthLink = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectURI}&scope=playlist-modify-public&show_dialog=true`;
  
    return  (
        <div className="login-div">
            <button className="pill-button login-pill">
                 <a href={spotifyAuthLink}>Login</a>
            </button>
        </div>
    ) 
}

export default LoginPage
