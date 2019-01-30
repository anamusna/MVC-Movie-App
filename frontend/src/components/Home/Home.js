import React, { Component } from 'react';
import './Home.css';
import UserFeed from "../UserFeed/UserFeed";

class Home extends Component {

  render() {


    return (
      <div className="center justify-content-center" id="Body">
        <UserFeed />
      </div>
    );
  }
}

export default Home;