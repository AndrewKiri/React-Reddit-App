import React, {Component} from 'react';

class RedditString extends Component {
	render() {
		return (
			<h4>Show me the {this.props.name} reddit</h4>
		);
	}
}

export default RedditString;