import React from 'react';
import './TrackList.css';

import Track from '../Track/Track';
import { ProjConsumer } from '../ContextProvider/ContextProvider';

const TrackList = (props) => {
	return (
		<ProjConsumer>
			{({playlistTracks}) => (
				<div className="TrackList">
					{playlistTracks.map((track) => {
						return (
							<Track
								track={track}
								key={track.id}
								onAdd={props.onAdd}
								onRemove={props.onRemove}
								isRemoval={props.isRemoval}
							/>
						);
					})}
				</div>
			)}
		</ProjConsumer>
	);
};

export default TrackList;
