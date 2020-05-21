import React from 'react';
import './SearchBar.css';
import { ProjConsumer } from '../ContextProvider/ContextProvider';

const SearchBar = () => {
	return (
		<ProjConsumer>
			{({ search, handleTermChange, term }) => (
				<div className="SearchBar">
					<input
						value={term}
						placeholder="Enter A Song, Album, or Artist"
						onChange={handleTermChange}
						name="term"
					/>
					<button className="SearchButton" onClick={search.bind(this, term)}>
						SEARCH
					</button>
				</div>
			)}
		</ProjConsumer>
	);
};

export default SearchBar;
