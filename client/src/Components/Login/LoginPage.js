import React from 'react'


function LoginPage() {
    
    const clientId = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_CLIENT_ID : process.env.CLIENT_ID;
    const redirectURI = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : process.env.REDIRECT_URI;
    const spotifyAuthLink = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectURI}&scope=playlist-modify-public&show_dialog=true`;
    // console.log({clientId, redirectURI, spotifyAuthLink})
    return  (
        <div className="login-div">
            <button className="pill-button login-pill">
                 <a href={spotifyAuthLink}>Login</a>
            </button>
        </div>
    ) 
}

export default LoginPage
