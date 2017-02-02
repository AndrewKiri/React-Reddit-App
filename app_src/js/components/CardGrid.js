import React, { Component } from 'react';

import Card from './Card';

class CardGrid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			grid: this.props.grid.map((card) => <Card data={card} />)
		}
	}
	
	render() {
		return (
			<div>

			</div>
		);
	}
}

export default CardGrid;