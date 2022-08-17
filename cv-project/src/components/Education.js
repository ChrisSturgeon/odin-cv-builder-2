import React, { Component } from 'react';
import '../styles/Education.css';

class Education extends Component {
  render() {
    return (
      <ul>
        {this.props.roles.map((inst) => {
          return (
            <div className="education-div" key={inst.id}>
              <div>
                {inst.studied} at {inst.school}
              </div>
              <div>{inst.level}</div>
              <div>
                {inst.from} to {inst.to}
              </div>
              <div>{inst.grade}</div>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default Education;
