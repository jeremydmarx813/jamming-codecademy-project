import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { Route } from 'react-router-dom';


function LoginPage() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const styleObj = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center' 
    }
    return (
        <div style={styleObj}>
            <button 
            className="Playlist-save"
            onClick={() => loginWithRedirect()}>Login
            </button>
        </div>
    )
}

export default LoginPage
