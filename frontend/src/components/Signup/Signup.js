import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './Signup.css';

class Signup extends Component {

  constructor(props) {
    super(props);

    this.state = {
     users:[]
    };


  }

  componentDidMount() {
		axios.post('http://localhost:3001/api/users/new').then((results) => {
			console.log(results);

			this.setState({ users: results.data });
			console.log(this.state.users);
		});
		
	}

  onChangeName=(value) => {
      this.setState({
			  name : value
		});
    
  };

  onChangeEmail=(value) => {
    this.setState({
      email : value
    });
  
  };

  onChangeUser=(value) => {
    this.setState({
      username : value
    });
  
  };

  onChangePassWord=(value) => {
    this.setState({
      password : value
    });
  
  };

  addUser(value){
    axios.post('http://localhost:3001/api/users/new', value).then((response) => console.log(response));
	}
  


  render() {

    return (


      <div id="tabs" className="medium-5 columns left bm-center-content row">

        <form id="form-login" className="col">

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
          <Grid item xs={12}>
            <Button type="submit" variant="extendedFab" className="btn-success" onClick={() => this.addUser(this.state)} >
              Sign Up
								</Button>

            <a href="/login" className="btn btn-outline-info">Already have an account Login here</a>
          </Grid>

        </form>

      </div>


    );
  }
}

export default Signup;