import React, {Component} from 'react';

class Form extends Component {
	constructor(props) {
		super(props);
	}

	handleChange(e) {
		var val = e.target.value;
		this.props.strPreview(val);
	}

	handleSubmit(e) {
		e.preventDefault();
		var data = {
			input: $('#input').val(),
			refresh: $('#refresh').prop('checked'),
			url: "https://www.reddit.com/r/" + $('#input').val() + "/.json"
		}
		this.props.setGrid(data);
	}	

	render() {
		return (
			<div className="row">
				<form className="col s12" onSubmit={this.handleSubmit.bind(this)}>
					<div className="row">
						<div className="input-field col s6 offset-s3">
							<input id="input" onChange={this.handleChange.bind(this)} type="text" className="validate" placeholder="Reddit Name" />
						</div>
					</div>
					<div className="row">
						<div className="col s6 offset-s3">
							<input type="checkbox" id="refresh" name="refresh" value="true"/>
							<label for="refresh">Auto-Refresh</label>		
						</div>	
					</div>
					<div className="row">
						<div className="col s6 offset-s3">
							<button id="submitBtn" className="btn waves-effect waves-light offset-s2" type="submit" name="action">
								submit<i className="material-icons right">send</i>
							</button>
						</div>		
					</div>
				</form>
			</div>
		);
	}
}

export default Form;