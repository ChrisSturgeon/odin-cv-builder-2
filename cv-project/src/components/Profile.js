import React, { Component } from 'react';
import '../styles/Profile.css';

class Profile extends Component {
  render() {
    return (
      <div className="profile-div">
        <h2>Profile</h2>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Profile;
