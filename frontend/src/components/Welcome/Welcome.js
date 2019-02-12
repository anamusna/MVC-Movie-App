import React, { Component } from 'react';
import axios from 'axios';


import './Welcome.css';
import Header from '../Header/Header'

class Welcome extends Component {
  constructor(props){
    super(props)
          this.state = {
          movies: ''
        }
  }

componentDidMount(){
  axios.get('http://localhost:3001/api/movies/list')
  .then(data=>console.log(data))
}



  render() {
    return (
      <div className="center">
        <Header />
        <h2 id="welcomeText">Welcome to the Movie Store</h2>
     

      
      </div>
    );
  }
}

export default Welcome;