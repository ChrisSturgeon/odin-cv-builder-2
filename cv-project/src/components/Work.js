import React, { Component } from 'react';
import '../styles/Work.css';

class Work extends Component {
  render() {
    return (
      <ul>
        {this.props.roles.map((role) => {
          return (
            <div className="work-div" key={role.id}>
              <div className="headers">
                {role.position} at {role.company}
              </div>
              <div className="headers">
                {role.from} to {role.to}{' '}
              </div>
              <div>{role.description}</div>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default Work;
