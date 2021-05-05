import React, { useContext } from 'react';
import './SearchBar.css';
import { ProjectContext } from '../ContextProvider/ContextProvider';

const SearchBar = () => {
	const [state, dispatch] = useContext(ProjectContext);
	return (
		
			
				<div className="SearchBar">
					<input
						value={state.term}
						placeholder="Enter A Song, Album, or Artist"
						onChange={(e) => {
							dispatch({
							 	type: "UPDATE_TERM",
							 	payload: e.target.value
							 })
						}}
						name="term"
					/>
					<button className="SearchButton" onClick={() => {console.log('search test')}}>
						SEARCH
					</button>
				</div>
			
		
	);
};

export default SearchBar;
