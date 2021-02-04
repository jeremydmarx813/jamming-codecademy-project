import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
// import Header from '../Header/Header';
// import LoginPage from '../Login/LoginPage';
// import Spotify from '../../util/Spotify';
import {useAuth0} from '@auth0/auth0-react';
import LogoutButton from '../Login/LogoutButton';
import { ContextProvider } from '../ContextProvider/ContextProvider';

const App = () => {
	const { isAuthenticated } = useAuth0();
	return isAuthenticated && (
		<ContextProvider>
					<SearchBar />
					<div className="App-playlist">
						<SearchResults />
						<Playlist />
						<LogoutButton />
					</div> 	
		</ContextProvider>
	);
};

export default App;
