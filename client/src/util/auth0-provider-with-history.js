import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import queryString from 'query-string'
import Spotify from './Spotify';
import axios from 'axios';

const Auth0ProviderWithHistory = ({children}) => {
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
    const history = useHistory();

    const redirectFunc = async (appState) => {
        // const { code } = queryString.parse(window.location.search)
        //     await axios.get('http://localhost:5000').then(res => {
        //     console.log(res.data)
        //     appState.test = res?.data?.test;
        //     return res;
        // }).then(res => {
        //     console.log('appState log from redirect auth0 func', appState);
        // });
        history.push(appState || window.location.pathname);

        // console.log({ code })
        // const authToken = await Spotify.getAuthToken(code)
        // console.log({ authToken })
        // Spotify.test().then(res => console.log(res.request.responseURL))
        
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
