import React, { useContext } from 'react';
import { ProjectContext } from '../ContextProvider/ContextProvider';
import './Track.css';

const Track = ({track, isRemoval}) => {
	const [state, dispatch] = useContext(ProjectContext);
	return (
		<div className="Track">
			<div className="Track-information">
				<h3>{track.name}</h3>
				<p>
					{track.artist} | {track.album}
				</p>
			</div>
			{isRemoval ? (
				<button className="Track-action" onClick={() => {
					dispatch({
						type: 'REMOVE_PLAYLIST_TRACK',
						payload: track.id
					})
				}}>
					-
				</button>
			) : (
				<button className="Track-action" onClick={() => {
                   dispatch({
					   type: 'ADD_PLAYLIST_TRACK',
					   payload: track
				   })
				}}>
					+
				</button>
			)}
		</div>
	);
};

export default Track;
