import React from 'react';
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Spotify from './Spotify';

const Auth0ProviderWithHistory = ({children}) => {
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
    const history = useHistory();

    const redirectFunc = (appState) => {
        const test = Spotify.test().then(res => console.log(res))
        console.log(appState)
        
    //   history.push(appState?.returnTo || window.location.pathname);
    }

    return (
        <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
        onRedirectCallback={redirectFunc}>
            {children}
        </Auth0Provider>
    )
}

export default Auth0ProviderWithHistory;