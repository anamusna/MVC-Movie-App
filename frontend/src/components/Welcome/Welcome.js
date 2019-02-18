import React, { Component } from 'react';

import MoviesList from '../Home/MoviesList';

import './Welcome.css';
import Header from '../Header/Header';

class Welcome extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies : ''
		};
	}

	render() {
		return (
			<div className="App">
				<Header />
				<h2 id="welcomeText">Welcome to the Movie Store</h2>

				<MoviesList />
			</div>
		);
	}
}

export default Welcome;
