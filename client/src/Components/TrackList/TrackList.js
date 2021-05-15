import React from 'react';
import './TrackList.css';

import Track from '../Track/Track';

const TrackList = ({tracks, isRemoval}) => {
	return (
		<div className="TrackList">
			{tracks.map(track => {
				return <Track track={track} key={track.id} isRemoval={isRemoval} />;
			})}
		</div>
	);
};

export default TrackList;
