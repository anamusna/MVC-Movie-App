import React, { Component } from 'react';
import axios from 'axios';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './Signup.css';
import { Redirect } from 'react-router-dom';
import Header from '../Header/Header';

class Signup extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user         : [],
			userSignedUp : false
		};
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onUserSubmit = (e) => {
		e.preventDefault();

		const userData = this.state;

		const config = {
			headers : {
				Accept         : 'application/json',
				'Content-Type' : 'application/json'
			}
		};

		console.log(userData);
		console.log(this.state);
		axios
			.post('http://localhost:3001/api/users/signup', userData, config)
			.then((response) => {
				this.setState({
					userSignedUp : true
				});
				console.log(response);
				return response;
			})
			.catch((error) => {
				console.log(error);
			});
	};

	confirmSignUp = () => {
		this.onUserSubmit
			.confirmSignUp(this.state.username, this.state.authCode)
			.then(() => this.props.history.push('/'))
			.catch((err) => console.log('error confirming signing up: ', err));
	};

	render() {
		if (this.state.userSignedUp === true) {
			return <Redirect to="/home" />;
		}
		return (
			<div>
				<Header />
			<div id="tabs" className="medium-5 columns left bm-center-content row">
				<form id="form-login" className="col" onSubmit={this.onUserSubmit}>
					<FormControl fullWidth className="row">
						<InputLabel>Name</InputLabel>

						<Input
							id="name"
							type="text"
							name="name"
							placeholder="Your Name"
							onChange={this.onChange}
							required
						/>
					</FormControl>

					<FormControl fullWidth className="row">
						<InputLabel>Email</InputLabel>

						<Input
							id="email"
							type="text"
							name="email"
							placeholder="email@example.com"
							onChange={this.onChange}
							required
						/>
					</FormControl>

					<FormControl fullWidth className="row">
						<InputLabel>Username</InputLabel>

						<Input
							id="username"
							type="text"
							name="username"
							placeholder="whats your user name"
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
						<Button type="submit" variant="extendedFab" className="btn-success">
							Sign Up
						</Button>
					</FormControl>
					

					<div className="signup-text">
						<a href="/login" className="btn btn-outline-info">
							Already have an account Login here
						</a>
					</div>
				</form>
			</div>
			</div>
		);
	}
}

export default Signup;
