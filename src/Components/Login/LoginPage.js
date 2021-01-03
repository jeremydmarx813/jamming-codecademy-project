import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';


function LoginPage() {
    const { loginWithRedirect }= useAuth0();
    return (
        <div>
            <button 
            className="Playlist-save"
            onClick={() => loginWithRedirect()}>Login
            </button>
        </div>
    )
}

export default LoginPage
