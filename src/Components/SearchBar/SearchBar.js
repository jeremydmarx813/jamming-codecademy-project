import React, { useState } from 'react';
import './SearchBar.css';
// import { ProjConsumer } from '../ContextProvider/ContextProvider';

const SearchBar = () => {
	// { search, handleTermChange, term }
	const [term, setTerm] = useState('')
	return (
		
			
				<div className="SearchBar">
					<input
						value={term}
						placeholder="Enter A Song, Album, or Artist"
						onChange={(e) => setTerm(e.target.value)}
						name="term"
					/>
					<button className="SearchButton" onClick={() => {console.log('search test')}}>
						SEARCH
					</button>
				</div>
			
		
	);
};
{/* <ProjConsumer></ProjConsumer> */}

export default SearchBar;
