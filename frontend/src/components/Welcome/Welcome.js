import React, { Component } from 'react';

import './Welcome.css';

class Welcome extends Component {
  render() {
    return (
      <div className="center row justify-content-center" id="Body">
        <h2 id="welcomeText">Welcome to the Movie Store</h2>
        <div className="medium-12 columns">
          <div className="user-sign">
            <a href="/login" className="btn btn-outline-primary">Login</a>
            <a href="/home" className="btn btn-outline-secondary">Home</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;