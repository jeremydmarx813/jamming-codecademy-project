import React from 'react';
import './Track.css';

const Track = ({track}) => {
	return (
		<div className="Track">
			<div className="Track-information">
				<h3>{track.name}</h3>
				<p>
					{track.artist} | {track.album}
				</p>
			</div>
			{/* {props.isRemoval ? (
				<button className="Track-action" onClick={props.buttonFunc.bind(this, props.track)}>
					-
				</button>
			) : (
				<button className="Track-action" onClick={props.buttonFunc.bind(this, props.track)}>
					+
				</button>
			)} */}
		</div>
	);
};

export default Track;
