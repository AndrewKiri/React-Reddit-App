import React, { Component } from 'react';
import CardItem from './CardItem';

class Card extends Component {
	render() {
		if (this.props.index % 3 === 0 && this.props.index % 4 !== 0) {
			return (
				<span>
					<CardItem card={this.props.card} index={this.props.index} />	
					<span className="clearfix show-on-medium"></span>
				</span>
			);	
		} else if (this.props.index % 4 === 0) {
			return (
				<span>
					<CardItem card={this.props.card} index={this.props.index} />	
					<span className="clearfix show-on-large"></span>
				</span>
			);
		} else {
			return (
				<span>
					<CardItem card={this.props.card} index={this.props.index} />
				</span>
			);
		}
	}
}

export default Card;