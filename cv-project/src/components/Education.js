import React, { Component } from 'react';

class Education extends Component {
  render() {
    return (
      <ul>
        {this.props.roles.map((inst) => {
          return (
            <div key={inst.id}>
              <div>{inst.school}</div>
              <div>{inst.level}</div>
              <div>{inst.from}</div>
              <div>{inst.to}</div>
              <div>{inst.grade}</div>
              <div>{inst.id}</div>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default Education;
