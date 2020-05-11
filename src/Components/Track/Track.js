import React from 'react';
import './Track.css';

import { ProjConsumer } from '../ContextProvider/ContextProvider';

class Track extends React.Component {
	constructor(props) {
		super(props);
	}

	renderAction() {
		if (this.props.isRemoval) {
			return (
				<button className="Track-action" onClick={this.props.buttonFunc}>
					-
				</button>
			);
		} else {
			return (
				<button className="Track-action" onClick={this.props.buttonFunc}>
					+
				</button>
			);
		}
	}

	render() {
		return (
			<ProjConsumer>
				{({}) => (
					<div className="Track">
						<div className="Track-information">
							<h3>{this.props.track.name}</h3>
							<p>
								{this.props.track.artist} | {this.props.track.album}
							</p>
						</div>
						{this.renderAction()}
					</div>
				)}
			</ProjConsumer>
		);
	}
}

export default Track;
