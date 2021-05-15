import React from 'react';
import './TrackList.css';

import Track from '../Track/Track';

const TrackList = ({tracks}) => {
	return (
		<div className="TrackList">
			{tracks.map(track => {
				return <Track track={track} key={track.id}  />;
			})}
		</div>
	);
};

export default TrackList;
