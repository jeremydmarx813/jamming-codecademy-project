import React from 'react';
import { ContextProvider } from '../Components/ContextProvider/ContextProvider';
import SearchBar from '../Components/SearchBar/SearchBar';
import useAuth from '../util/useAuth';
import SearchResults from '../Components/SearchResults/SearchResults';
import Playlist from '../Components/Playlist/Playlist';

const Dashboard = ({code}) => {
    const accessToken = useAuth(code);
	
    return (
        <ContextProvider >
					<SearchBar accessToken={accessToken}/>
					<div className="App-playlist">
						<SearchResults />
						<Playlist />
					</div> 	
		</ContextProvider>
    )
}

export default Dashboard
