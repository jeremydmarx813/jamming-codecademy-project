import React, { useState, useEffect } from 'react';
import Spotify from '../../util/Spotify';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
// import SearchResults from '../SearchResults/SearchResults';
// import Playlist from '../Playlist/Playlist';
// import Header from '../Header/Header';
// import LoginPage from '../Login/LoginPage';
// import Spotify from '../../util/Spotify';
import {useAuth0} from '@auth0/auth0-react';
import LogoutButton from '../Login/LogoutButton';
import { ContextProvider } from '../ContextProvider/ContextProvider';
import { Redirect } from 'react-router-dom';

const App = () => {
	const { isAuthenticated } = useAuth0();
	useEffect(() => {
		Spotify.test().then(res => console.log(res));
	},[])
	return isAuthenticated ? (
			<ContextProvider>
					<SearchBar />
					<div className="App-playlist">
						{/* <SearchResults /> */}
						{/* <Playlist /> */}
						<LogoutButton />
					</div> 	
			</ContextProvider>
	) : <Redirect to="/login"/>;
};


export default App;
