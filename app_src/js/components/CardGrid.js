import React, { Component } from 'react';

import Card from './Card';

class CardGrid extends Component {
	constructor(props) {
		super(props);
	}

	buildGrid(val) {
		return (
			val.map((card, index) => <Card key={card.data.id.toString()} card={card} index={index + 1} />)
		);
	}
	
	render() {
		return (
			<div className="row">
				{this.buildGrid(this.props.grid)}
			</div>
		);
	}
}

export default CardGrid;