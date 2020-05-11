import React from 'react';
import './SearchResults.css';

import TrackList from '../TrackList/TrackList';
import { ProjConsumer } from '../ContextProvider/ContextProvider';

const SearchResults = (props) => {
	return (
		<ProjConsumer>
			{({ searchResults, addTrack }) => (
				<div className="SearchResults">
					<h2>Results</h2>
					<TrackList tracks={searchResults}  isRemoval={false} buttonFunc={addTrack} />
				</div>
			)}
		</ProjConsumer>
	);
};

export default SearchResults;
