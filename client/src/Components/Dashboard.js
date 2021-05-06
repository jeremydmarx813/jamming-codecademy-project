import React from 'react';
import { ContextProvider } from '../Components/ContextProvider/ContextProvider';
import SearchBar from '../Components/SearchBar/SearchBar';
import useAuth from '../util/useAuth';

const Dashboard = ({code}) => {
    const accessToken = useAuth(code);
    return (
        <ContextProvider>
					<SearchBar />
					<div className="App-playlist">
						{/* <SearchResults /> */}
						{/* <Playlist /> */}
						
					</div> 	
		</ContextProvider>
    )
}

export default Dashboard
