import React, { Component } from 'react';
import './App.css';
import Routes from './routes';
import Footer from './components/Footer/Footer';

class App extends Component {
	constructor() {
		super();
		this.state = {
			appName : 'Movies App',
			menu    : ''
		};
	}

	render() {
		return (
			<div className="row center justify-content-center" name={this.state.appName}>
				<Routes />

				<Footer />
			</div>
		);
	}
}

export default App;
