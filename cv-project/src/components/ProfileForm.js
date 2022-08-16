import React, { Component } from 'react';

class ProfileForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.submitting}>
        <label htmlFor="profileText">Profile Text</label>
        <textarea
          value={this.props.text}
          id="profileText"
          onChange={this.props.changing}
          placeholder="A brief introduction to outline your attributes, qualities and work experience..."
        ></textarea>
        <button type="submit">Save</button>
        <button onClick={this.props.editing}>Edit</button>
      </form>
    );
  }
}

export default ProfileForm;
