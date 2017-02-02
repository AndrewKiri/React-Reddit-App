import React, {Component} from 'react';

class CardItem extends Component {
	render() {
		return (
			<div className="col s12 m4 l3">
				<div className="card">
					<div className="card-image">
						<img src={this.props.card.image} />
					</div>
					<div className="card-content">
						<p>{this.props.card.title}</p>
					</div>
					<div className="card-action">
						<a target="_blank" href={this.props.card.url}>Watch</a>
						<span className="right">{this.props.card.ups}</span>
					</div>
				</div>
			</div>
		);
	}
}

export default CardItem;