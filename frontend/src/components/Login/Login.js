import React, { Component } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';
import axios from 'axios';

import './Login.css';

class Login extends Component {
	constructor() {
		super();

		this.state = {
			username     : '',
			password     : '',
			userLoggedIn : false
		};
	}

	login = () => {
		axios.post('http://localhost:3001/api/users/list').then((response) => console.log(response));
		this.setState({
			userLoggedIn : true
		});
	};

	onChange(e) {
		console.log(e.target.value);
	}
	render() {
		return (
			<div id="tabs" className="medium-5 columns left bm-center-content row">
				<form id="form-login" className="col">
					<FormControl fullWidth className="row">
						<InputLabel>Username</InputLabel>
						<Input
							type="text"
							name="username"
							id="username"
							placeholder="email@example.com"
							onChange={this.onChange}
							required
						/>
					</FormControl>
					<FormControl fullWidth className="row">
						<InputLabel>Password</InputLabel>
						<Input
							id="password"
							type="password"
							name="password"
							placeholder="enter password"
							onChange={this.onChange}
							required
						/>
					</FormControl>
					<FormControl fullWidth className="row">
						<span style={{ float: 'right', textAlign: 'right', color: 'white' }}>
							<a id="" href="/">
								Forgotten password?
							</a>
						</span>

						<Button type="submit" variant="extendedFab" className="btn-success" onClick={this.login}>
							Login
						</Button>
					</FormControl>

					<div className="social-login">
						<FacebookLoginButton iconSize="20px" size="40px" onClick={() => alert('Hello')}>
							<span style={{ fontSize: 15 }}>Login with facebook</span>
						</FacebookLoginButton>
						<GoogleLoginButton iconSize="20px" size="40px" onClick={() => alert('Hello')}>
							<span style={{ fontSize: 15 }}>Login with google</span>
						</GoogleLoginButton>
					</div>
					<div className="signup-text">
						<a href="/signup" className="btn btn-outline-info">
							You dont have an account sign up here
						</a>
					</div>
				</form>
			</div>
		);
	}
}

export default Login;
