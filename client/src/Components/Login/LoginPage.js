import React from 'react'
// import { useAuth0 } from '@auth0/auth0-react';
// import { Redirect } from 'react-router-dom';


function LoginPage() {
    // const { loginWithRedirect, isAuthenticated } = useAuth0();
    const spotifyAuthLink = 'https://accounts.spotify.com/authorize?client_id=f03925ce76e844a79a88dbbe1f677103&response_type=code&redirect_uri=http://localhost:3000&scope=playlist-modify-public&show_dialog=true';
    const styleObj = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center' 
    }
    return  (
        <div style={styleObj}>
            <button className="Playlist-save">
                 <a href={spotifyAuthLink}>Login</a>
            </button>
        </div>
    ) 
}

export default LoginPage
