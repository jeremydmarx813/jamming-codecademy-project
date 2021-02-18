import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { Redirect } from 'react-router-dom';


function LoginPage() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const styleObj = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center' 
    }
    return !isAuthenticated ? (
        <div style={styleObj}>
            <button 
            className="Playlist-save"
            onClick={() => loginWithRedirect()}>Login
            </button>
        </div>
    ) : <Redirect to="/"/>
}

export default LoginPage
