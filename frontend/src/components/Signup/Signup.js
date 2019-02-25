import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './Signup.css';

class Signup extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user : []
		};
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
		console.log(e.target.value);
	};

	onAddUser(value) {
		axios.post('http://localhost:3001/api/users/signup', value).then((response) => console.log(response));
	}

	onUserSubmit = (e) => {
		e.preventDefault();

		const userData = new FormData();
		userData.append('name', this.state.name);
		userData.append('email', this.state.email);
		userData.append('username', this.state.username);
		userData.append('password', this.state.password);

		axios.post('http://localhost:3001/api/users/signup', userData).then((response) => {
			console.log(response);

			this.setState({
				user : response.data
			});
			console.log(this.state);
		});
	};

	render() {
		const { name, username, email, password} = this.state;
		return (
			<div id="tabs" className="medium-5 columns left bm-center-content row">
				<form id="form-login" className="col" onSubmit={this.onUserSubmit}>
					<FormControl fullWidth className="row">
						<InputLabel>Name</InputLabel>

						<Input
							id="name"
							type="text"
							name="name"
							value = {name}
							placeholder="Your Name"
							onChange={this.onChange}
							required
						/>
					</FormControl>

					<FormControl fullWidth className="row">
						<InputLabel>Email</InputLabel>

						<Input
							id="email"
							value = {email}
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
							value = {username}
							placeholder="whats your user name"
							onChange={this.onChange}
							required
						/>
					</FormControl>

					<FormControl fullWidth className="row">
						<InputLabel>Password</InputLabel>

						<Input
							value = {password}
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
		);
	}
}

export default Signup;