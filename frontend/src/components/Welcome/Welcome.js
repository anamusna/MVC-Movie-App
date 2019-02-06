import React, { Component } from 'react';
<<<<<<< HEAD
import axios from 'axios';

=======
>>>>>>> 9eb0d2f6b6cf6a01b2763eac7f4f4c1b6f8598d0
import './Welcome.css';
import Header from '../Header/Header'

class Welcome extends Component {

componentDidMount(){
  axios.get('http://localhost:3001/api/movies/list')
  .then(data=>console.log(data))
}



  render() {
    return (
      <div className="center">
        <Header />
        <h2 id="welcomeText">Welcome to the Movie Store</h2>
      
        <div className="medium-12 columns">

        </div>
      </div>
    );
  }
}

export default Welcome;