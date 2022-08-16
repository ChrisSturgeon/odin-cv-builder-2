import React, { Component } from 'react';

class PersonalForm extends Component {
  render() {
    if (this.props.editActive) {
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
          <button type="submit">Save Edit</button>
        </form>
      );
    } else if (this.props.completed) {
      return (
        <form onSubmit={this.props.submitting}>
          <button onClick={this.props.editing}>Edit</button>
        </form>
      );
    }
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
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default PersonalForm;
