import React, {Component} from 'react';

class RedditString extends Component {
	render() {
		return (
			<div className="row">
				<div className="col s6 offset-s3">
					<h4>Show me the {this.props.name} reddit</h4>
				</div>
			</div>
		);
	}
}

export default RedditString;