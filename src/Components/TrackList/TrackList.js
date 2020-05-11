import React from 'react';
import './TrackList.css';

import Track from '../Track/Track';
import { ProjConsumer } from '../ContextProvider/ContextProvider';

const TrackList = (props) => {
	return (
		<ProjConsumer>
			{({}) => (
				<div className="TrackList">
					{this.props.tracks.map((track) => {
						return (
							<Track
								track={track}
								key={track.id}
                                buttonFunc={this.props.buttonFunc}
							/>
						);
					})}
				</div>
			)}
		</ProjConsumer>
	);
};

export default TrackList;
