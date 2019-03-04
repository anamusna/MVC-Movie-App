import React, { Component } from 'react';
import MoviesListWellcome from '../Home/MoviesListWellcome';

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
				
				

				<MoviesListWellcome /> 
			</div>
		);
	}
}

export default Welcome;
