import React from 'react';
import './Track.css';

const Track = (props) => {
	return (
		<div className="Track">
			<div className="Track-information">
				<h3>{props.track.name}</h3>
				<p>
					{props.track.artist} | {props.track.album}
				</p>
			</div>
			{props.isRemoval ? (
				<button className="Track-action" onClick={props.buttonFunc.bind(this, props.track)}>
					-
				</button>
			) : (
				<button className="Track-action" onClick={props.buttonFunc.bind(this, props.track)}>
					+
				</button>
			)}
		</div>
	);
};

export default Track;
