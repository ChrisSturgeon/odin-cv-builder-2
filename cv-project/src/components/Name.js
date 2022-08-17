import React, { Component } from 'react';
import '../styles/Name.css';

class Name extends Component {
  render() {
    return <h1 className="CV-name">{this.props.name}</h1>;
  }
}

export default Name;
