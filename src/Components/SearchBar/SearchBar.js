import React from 'react';
import './SearchBar.css';
import { ProjConsumer } from '../ContextProvider/ContextProvider';

const SearchBar = () => {
		return (
			<ProjConsumer>
				{({ search, handleTermChange, term, searchBarDefaultVal }) => (
					<div className="SearchBar">
						<input placeholder={searchBarDefaultVal} onChange={handleTermChange} />
						<button className="SearchButton" onClick={search.bind(this)}>
							SEARCH
						</button>
					</div>
				)}
			</ProjConsumer>
		);
}

export default SearchBar;
