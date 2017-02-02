import React, { Component } from 'react';
import RedditString from './RedditString';
import Form from './Form';


class Header extends Component {
	render() {
		return (
			<div>
				<RedditString name={this.props.reddit} />
				<Form strPreview={this.props.strPreview} />
			</div>	
		);
	}
}

export default Header;