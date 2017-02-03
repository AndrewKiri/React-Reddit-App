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

	setGrid(val) {
		this.setState({ grid: val });
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