import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div>
        <div>{this.props.current.tel.saved}</div>
        <div>{this.props.current.email.saved}</div>
        <div>{this.props.current.location.saved}</div>
        <div>{this.props.current.website.saved}</div>
      </div>
    );
  }
}

export default Contact;
