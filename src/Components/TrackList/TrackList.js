import React from 'react';
import './TrackList.css';

import Track from '../Track/Track';
import { ProjConsumer } from '../ContextProvider/ContextProvider';

const TrackList = (props) => {
	return (
		<ProjConsumer>
			{() => (
				<div className="TrackList">
					{props.tracks.map((track) => {
						return (
							<Track
								track={track}
								key={track.id}
                                buttonFunc={props.buttonFunc}
							/>
						);
					})}
				</div>
			)}
		</ProjConsumer>
	);
};

export default TrackList;
