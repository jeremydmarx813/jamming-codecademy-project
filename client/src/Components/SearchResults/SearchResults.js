import React, { useContext } from 'react';
import './SearchResults.css';

import TrackList from '../TrackList/TrackList';
import { ProjectContext } from '../ContextProvider/ContextProvider';

const SearchResults = () => {
	const [state] = useContext(ProjectContext);

	return state.searchResults.length > 0 ? ( 
	          <div className="SearchResults">
					<h2>Results</h2>
					<TrackList tracks={state.searchResults} isRemoval={false}/>
			</div>		
			
	) : null;
};

export default SearchResults;
