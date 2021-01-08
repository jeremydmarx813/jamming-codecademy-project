import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Header from '../Header/Header';
import LoginPage from '../Login/LoginPage';
// import Spotify from '../../util/Spotify';
import {useAuth0} from '@auth0/auth0-react';

import { ContextProvider } from '../ContextProvider/ContextProvider';

const App = () => {
	const { isAuthenticated } = useAuth0()
	return (
		<ContextProvider>
			<div>
				<Header />

				<div className="App">

					{!isAuthenticated ? <LoginPage /> :
					<>
					<SearchBar />

					<div className="App-playlist">
						<SearchResults />
						<Playlist />
					</div> 
					</>
					}
				</div>
			</div>
		</ContextProvider>
	);
};

export default App;
