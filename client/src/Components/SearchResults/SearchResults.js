import React, { useEffect, useContext } from 'react';
import './SearchResults.css';

import TrackList from '../TrackList/TrackList';
import { ProjConsumer, ProjectContext } from '../ContextProvider/ContextProvider';

const SearchResults = () => {
	const [state, dispatch] = useContext(ProjectContext);

	return state.searchResults ? ( 
	          <div className="SearchResults">
					<h2>Results</h2>
					<TrackList tracks={state.searchResults} />
			</div>		
			
	) : null;
};

export default SearchResults;
