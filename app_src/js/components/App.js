import React, {Component} from 'react';

import Header from './Header';
import CardGrid from './CardGrid';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reddit: "funny",
			grid: []
		}
	}

	strPreview(val) {
		this.setState({ reddit: val });
	}

	setGrid(data) {
		$.get(data.url, function (response) {
			this.setState({
				grid: response.data.children,
				lastData: data
			});
			if (data.refresh === true) {
				if (!this.timer) {
					this.timer = setInterval(this.setGrid.bind(this,this.state.lastData),10000);
				} else {
					clearInterval(this.timer);
					this.timer = setInterval(this.setGrid.bind(this,this.state.lastData),10000);
				}	
			} else if(this.timer) {
				clearInterval(this.timer);
			}
		}.bind(this))
	}

	render() {
		return (
			<div>
				<Header setGrid={this.setGrid.bind(this)} reddit={this.state.reddit} strPreview={this.strPreview.bind(this)} />
				<CardGrid grid={this.state.grid} />
			</div>
		);
	}
}

export default App;