import React, { Component } from 'react';
import RedditString from './RedditString'

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reddit: "funny"
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		var val = e.target.value;
		this.setState({reddit: val});
	}
	
	render() {
		return (
			<div>
				<div className="row">
					<div className="col s12">
						<RedditString name={this.state.reddit} />	
					</div>	
				</div>
				<div className="row">
					<form className="col s12">
						<div className="row">	
							<div className="input-field col s6">
								<input id="reddit-input" onChange={this.handleChange} type="text" className="validate" />
								<label for="reddit-input">Reddit Name</label>
								<button className="btn waves-effect waves-light" type="submit" name="action">
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