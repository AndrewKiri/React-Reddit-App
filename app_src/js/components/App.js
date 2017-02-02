import React, {Component} from 'react';

import Header from './Header';
import CardGrid from './CardGrid';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reddit: "funny",
			grid: [
				{
					"id": "5rcpwo",
					"title": "The Lost Boys, Then vs Now.",
					"image": "https://i.redditmedia.com/HHHvnRIINqcmIgLJ6L-SBIV0ynFwzxh_3O5a-3JsQJQ.jpg?s=0b6815288f193fc90c321e60685d1bb0",
					"ups": 16983,
					"url": "https://www.reddit.com/r/funny/comments/5rcpwo/the_lost_boys_then_vs_now/"
				},
				{
					"id": "5rcg99",
					"title": "My neighbors said they would be filming a \"movie\". Not really what I had in mind.",
					"image": "https://i.redditmedia.com/Em7zjKdCpnd_cOXsytE6u7lGHTtoRDg_GegYJePIPbQ.jpg?s=16e86a74f0392352794ddda016460d39",
					"ups": 7682,
					"url": "https://www.reddit.com/r/funny/comments/5rcg99/my_neighbors_said_they_would_be_filming_a_movie/"
				},
				{
					"id": "5rbrt9",
					"title": "My friend got tired of his kids losing the remotes",
					"image": "https://i.redditmedia.com/R7bHX8dBmNPLpxNx66rWua55BLr2rUunngDetNRyNHM.jpg?s=3cacf70ca58fa2a77734025091ee2f6a",
					"ups": 13163,
					"url": "https://www.reddit.com/r/funny/comments/5rbrt9/my_friend_got_tired_of_his_kids_losing_the_remotes/"
				},
				{
					"id": "5rdf9d",
					"title": "Lipstick on the Mirrors",
					"image": "https://i.redditmedia.com/XdFZd56llZr7JNXH9yomWC-66f7hbQ77BNB-SN3xB8I.gif?fm=jpg&s=53bffdfae76210b5f99e376d1bc6e3b1",
					"ups": 2529,
					"url": "https://www.reddit.com/r/funny/comments/5rdf9d/lipstick_on_the_mirrors/"
				},
								{
					"id": "5rcpwa",
					"title": "The Lost Boys, Then vs Now.",
					"image": "https://i.redditmedia.com/HHHvnRIINqcmIgLJ6L-SBIV0ynFwzxh_3O5a-3JsQJQ.jpg?s=0b6815288f193fc90c321e60685d1bb0",
					"ups": 16983,
					"url": "https://www.reddit.com/r/funny/comments/5rcpwo/the_lost_boys_then_vs_now/"
				},
				{
					"id": "5rca99",
					"title": "My neighbors said they would be filming a \"movie\". Not really what I had in mind.",
					"image": "https://i.redditmedia.com/Em7zjKdCpnd_cOXsytE6u7lGHTtoRDg_GegYJePIPbQ.jpg?s=16e86a74f0392352794ddda016460d39",
					"ups": 7682,
					"url": "https://www.reddit.com/r/funny/comments/5rcg99/my_neighbors_said_they_would_be_filming_a_movie/"
				},
				{
					"id": "5rart9",
					"title": "My friend got tired of his kids losing the remotes",
					"image": "https://i.redditmedia.com/R7bHX8dBmNPLpxNx66rWua55BLr2rUunngDetNRyNHM.jpg?s=3cacf70ca58fa2a77734025091ee2f6a",
					"ups": 13163,
					"url": "https://www.reddit.com/r/funny/comments/5rbrt9/my_friend_got_tired_of_his_kids_losing_the_remotes/"
				},
				{
					"id": "5saf9d",
					"title": "Lipstick on the Mirrors",
					"image": "https://i.redditmedia.com/XdFZd56llZr7JNXH9yomWC-66f7hbQ77BNB-SN3xB8I.gif?fm=jpg&s=53bffdfae76210b5f99e376d1bc6e3b1",
					"ups": 2529,
					"url": "https://www.reddit.com/r/funny/comments/5rdf9d/lipstick_on_the_mirrors/"
				},
				{
					"id": "3saf9d",
					"title": "Lipstick on the Mirrors",
					"image": "https://i.redditmedia.com/XdFZd56llZr7JNXH9yomWC-66f7hbQ77BNB-SN3xB8I.gif?fm=jpg&s=53bffdfae76210b5f99e376d1bc6e3b1",
					"ups": 2529,
					"url": "https://www.reddit.com/r/funny/comments/5rdf9d/lipstick_on_the_mirrors/"
				}
			]
		}
	}

	strPreview(val) {
		this.setState({ reddit: val });
	}

	render() {
		return (
			<div>
				<Header reddit={this.state.reddit} strPreview={this.strPreview.bind(this)} />
				<CardGrid grid={this.state.grid} />
			</div>
		);
	}
}

export default App;