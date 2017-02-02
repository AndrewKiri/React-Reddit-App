import React, { Component } from 'react';
import RedditString from './RedditString';


class Header extends Component {
	handleChange(e) {
		var val = e.target.value;
		this.props.previewReddit(val);
	}

	render() {
		return (
			<div>
				<div className="row">
					<div className="col s6 offset-s3">
						<RedditString name={this.props.reddit} />	
					</div>
				</div>
				<div className="row">
					<form className="col s12">
						<div className="row">	
							<div className="input-field col s6 offset-s3">
								<input id="reddit-input" onChange={this.handleChange.bind(this)} type="text" className="validate" placeholder="Reddit Name" />
								<button className="btn waves-effect waves-light offset-s2" type="submit" name="action">
									submit<i className="material-icons right">send</i>
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>	
		);
	}
}

export default Header;