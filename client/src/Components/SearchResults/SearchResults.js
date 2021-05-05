import React from 'react';
import './SearchResults.css';

import TrackList from '../TrackList/TrackList';
import { ProjConsumer } from '../ContextProvider/ContextProvider';

const SearchResults = () => {
	return (
		<ProjConsumer>
			{({ searchResultsArrayInState, addTrack }) => {
				if (searchResultsArrayInState.length) {
					return (
						<div className="SearchResults">
							<h2>Results</h2>
							<TrackList tracks={searchResultsArrayInState} isRemoval={false} buttonFunc={addTrack} />
						</div>
					);
				} else {
					return <React.Fragment />;
				}
			}}
		</ProjConsumer>
	);
};

export default SearchResults;
