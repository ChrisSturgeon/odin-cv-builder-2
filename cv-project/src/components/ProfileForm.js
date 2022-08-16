import React, { Component } from 'react';

class ProfileForm extends Component {
  render() {
    if (this.props.editActive) {
      return (
        <form onSubmit={this.props.submitting}>
          <label htmlFor="profileText">Profile Text</label>
          <textarea
            required
            value={this.props.text}
            id="profileText"
            onChange={this.props.changing}
            placeholder="A brief introduction to outline your attributes, qualities and work experience..."
          ></textarea>
          <button type="submit">Save edit</button>
        </form>
      );
    } else if (this.props.completed) {
      return <button onClick={this.props.editing}>Edit</button>;
    }
    return (
      <form onSubmit={this.props.submitting}>
        <label htmlFor="profileText">Profile Text</label>
        <textarea
          required
          value={this.props.text}
          id="profileText"
          onChange={this.props.changing}
          placeholder="A brief introduction to outline your attributes, qualities and work experience..."
        ></textarea>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default ProfileForm;
