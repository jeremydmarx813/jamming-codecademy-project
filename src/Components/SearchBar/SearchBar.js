import React from 'react';
import './SearchBar.css';
import { ProjConsumer } from '../ContextProvider/ContextProvider';

const SearchBar = () => {
	return (
		<ProjConsumer>
			{({ search, handleTermChange, term }) => (
				<div className="SearchBar">
					<input
						defaultValue={term}
						placeholder="Enter A Song, Album, or Artist"
						onChange={handleTermChange}
					/>
					<button className="SearchButton" onClick={search.bind(this)}>
						SEARCH
					</button>
				</div>
			)}
		</ProjConsumer>
	);
};

export default SearchBar;
