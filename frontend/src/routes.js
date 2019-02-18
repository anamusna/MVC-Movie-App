import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Welcome from '././components/Welcome/Welcome';
import Home from '././components/Home/Home';
import Login from '././components/Login/Login';
import Signup from '././components/Signup/Signup';
import NotFound from '././components/NotFound/NotFound';

import AddMovie from '././components/Home/AddMovie';

class Routes extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Welcome} />
						<Route path="/home" component={Home} />
						<Route path="/login" component={Login} />
						<Route path="/Signup" component={Signup} />
						<Route path="/new" component={AddMovie} />
						<Route path="*" component={NotFound} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default Routes;
