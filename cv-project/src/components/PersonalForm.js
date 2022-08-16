import React, { Component } from 'react';

class PersonalForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.submitting}>
        <label htmlFor="nameInput">Name</label>
        <input
          value={this.props.name}
          onChange={this.props.changing}
          type="text"
          id="nameInput"
          placeholder="e.g. John Doe..."
          required
        ></input>
        <button type="submit">Save</button>
        <button onClick={this.props.editing}>Edit</button>
      </form>
    );
  }
}

export default PersonalForm;
