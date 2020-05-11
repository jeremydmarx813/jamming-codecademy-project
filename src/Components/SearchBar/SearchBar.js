import React from 'react';
import './SearchBar.css';
import { ProjConsumer } from '../ContextProvider/ContextProvider';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ProjConsumer>
				{({ search, handleTermChange, term }) => (
					<div className="SearchBar">
						<input placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange} />
						<button className="SearchButton" onClick={search}>
							SEARCH
						</button>
					</div>
				)}
			</ProjConsumer>
		);
	}
}

export default SearchBar;
