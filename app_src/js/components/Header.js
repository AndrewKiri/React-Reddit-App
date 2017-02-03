import React, { Component } from 'react';
import RedditString from './RedditString';
import Form from './Form';


class Header extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
				<RedditString name={this.props.reddit} />
				<Form setGrid={this.props.setGrid} strPreview={this.props.strPreview} />
			</div>	
		);
	}
}

export default Header;