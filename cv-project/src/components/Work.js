import React, { Component } from 'react';

class Work extends Component {
  render() {
    return (
      <ul>
        {this.props.roles.map((role) => {
          return (
            <div key={role.id}>
              <div>{role.company}</div>
              <div>{role.position}</div>
              <div>{role.from}</div>
              <div>{role.to}</div>
              <div>{role.description}</div>
              <div>{role.id}</div>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default Work;
