import React, { useContext, useEffect} from 'react';
import './SearchBar.css';
import { ProjectContext } from '../ContextProvider/ContextProvider';
import Spotify from '../../util/Spotify';
import axios from 'axios';

const SearchBar = ({accessToken}) => {
	const [state, dispatch] = useContext(ProjectContext);
	useEffect(() => {
        dispatch({
			type: 'ACCESS_TOKEN',
			payload: accessToken
		})
	}, [accessToken, dispatch]);

	useEffect(() => {
		// axios.get('https://api.spotify.com/v1/me', {
		// 	headers: {
		// 			'Authorization' : `Bearer ${accessToken}`
		// 		  }
		// })
        // .then((response) => {
		// 	console.log(`playlist useEffect response ${response}`);
		// }).catch(err => {
		// 	console.log(err);
		// })
		fetch('https://api.spotify.com/v1/me', {
			headers: { 
				'Authorization': `Bearer ${state.accessToken}`
			}
		}).then((response) => {
			return response.json();
		})
		.then(jsonResponse => {
			dispatch({
				type: 'USER_INFO',
				payload: jsonResponse
			})
		}).catch(err => {
			console.log(err);
		})
	}, [state.accessToken, dispatch])
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
