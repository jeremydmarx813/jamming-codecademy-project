import React from 'react';
import './TrackList.css';

import Track from '../Track/Track';

const TrackList = (props) => {
	return (
		<div className="TrackList">
			{props.tracks.map((track, i) => {
				return <Track track={track} key={i} buttonFunc={props.buttonFunc} isRemoval={props.isRemoval} />;
			})}
		</div>
	);
};

export default TrackList;
