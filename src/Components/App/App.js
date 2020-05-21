import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Header from '../Header/Header';
// import Spotify from '../../util/Spotify';

import { ContextProvider } from '../ContextProvider/ContextProvider';

const App = () => {
	return (
		<ContextProvider>
			<div>
				<Header />

				<div className="App">
					<SearchBar />

					<div className="App-playlist">
						<SearchResults />
						<Playlist />
					</div>
				</div>
			</div>
		</ContextProvider>
	);
};

export default App;
