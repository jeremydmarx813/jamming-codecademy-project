import React, { useContext } from 'react';
import './SearchBar.css';
import { ProjectContext } from '../ContextProvider/ContextProvider';
import Spotify from '../../util/Spotify';

const SearchBar = ({accessToken}) => {
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
					<button className="SearchButton" onClick={() => {
						Spotify.search(state.term, accessToken)
						.then(res => {
							// console.log(res)
							dispatch({
								type: 'SEARCH_RESULTS',
								payload: res
							})
						})
						.catch(err => {
							console.log(err);
						})
					    
					}}>
						SEARCH
					</button>
				</div>
			
		
	);
};

export default SearchBar;
