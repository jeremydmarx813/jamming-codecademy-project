import React from 'react'


function LoginPage() {
    
    const clientId = process.env.REACT_APP_CLIENT_ID;
    const redirectURI = process.env.REACT_APP_REDIRECT_URI;
    const spotifyAuthLink = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectURI}&scope=playlist-modify-public&show_dialog=true`;
    console.log({clientId, redirectURI})
    return  (
        <div className="login-div">
            <button className="pill-button login-pill">
                 <a href={spotifyAuthLink}>Login</a>
            </button>
        </div>
    ) 
}

export default LoginPage
