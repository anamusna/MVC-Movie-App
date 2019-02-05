import React, { Component } from 'react';
import './Welcome.css';
import Header from '../Header/Header'

class Welcome extends Component {
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