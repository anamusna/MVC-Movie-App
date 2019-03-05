import React, { Component } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Header from '../Header/Header';

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

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onUserSubmit = (e) => {
		if (this.state.userLoggedIn === true) {
			return <Redirect to="/home" />;
		}
		e.preventDefault();

		const userData = this.state;

		const config = {
			headers : {
				'Content-Type' : 'application/json'
			}
		};

		axios
			.post('http://localhost:3001/api/users/signin', userData, config)
			.then((response) => {
				this.setState({
					userLoggedIn : true
				});
			})
			.catch((error) => {
				console.log(error.response);
			});
	};

	render() {
		if (this.state.userLoggedIn === true) {
			return <Redirect to="/home" />;
		}
		return (
			<div>
				<Header />
				<div id="tabs" className="medium-5 columns left bm-center-content row">
					<form id="form-login" className="col" onSubmit={this.onUserSubmit}>
						<FormControl fullWidth className="row">
							<InputLabel>Username</InputLabel>
							<Input
								style={{ background: 'white !important' }}
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

							<Button type="submit" variant="extendedFab" className="btn-outline-success">
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
								Don't have an account sign up here
							</a>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;
