import React, { Component } from 'react';

import Card from './Card';

class CardGrid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			grid: this.props.grid.map((card, index) => <Card key={card.id.toString()} card={card} index={index+1}/>)
		}
	}
	
	render() {
		return (
			<div className="row">
				{this.state.grid}
			</div>
		);
	}
}

export default CardGrid;