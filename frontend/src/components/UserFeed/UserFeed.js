import React, { Component } from 'react';
import UserHead from './UserHead';
class UserFeed extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      name: '',
    };

  }

  render() {

    return (
      <div className=" center justify-content-center ">
        <UserHead />
        <h1>Homepage</h1>



      </div>

    )

  }

}

export default UserFeed;