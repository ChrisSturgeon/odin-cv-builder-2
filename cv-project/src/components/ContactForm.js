import React, { Component } from 'react';

class ContactForm extends Component {
  render() {
    if (this.props.current.completed === true) {
      return <button onClick={this.props.editing}>Edit</button>;
    } else if (this.props.editActive) {
      return (
        <form onSubmit={this.props.submitting}>
          <label htmlFor="tel">Telephone*</label>
          <input
            name="tel"
            value={this.props.current.tel.temp}
            onChange={this.props.changing}
            type="text"
            id="tel"
            required
          ></input>
          <label htmlFor="email">Email*</label>
          <input
            name="email"
            value={this.props.current.email.temp}
            onChange={this.props.changing}
            type="email"
            id="email"
            required
          ></input>
          <label htmlFor="location">Location</label>
          <input
            name="location"
            value={this.props.current.location.temp}
            onChange={this.props.changing}
            type="text"
            id="location"
          ></input>
          <label htmlFor="website">Website</label>
          <input
            name="website"
            value={this.props.current.website.temp}
            onChange={this.props.changing}
            type="text"
            id="website"
          ></input>
          <button type="submit">Save Edit</button>
        </form>
      );
    }
    return (
      <form onSubmit={this.props.submitting}>
        <label htmlFor="tel">Telephone*</label>
        <input
          name="tel"
          value={this.props.current.tel.temp}
          onChange={this.props.changing}
          type="text"
          id="tel"
          required
        ></input>
        <label htmlFor="email">Email*</label>
        <input
          name="email"
          value={this.props.current.email.temp}
          onChange={this.props.changing}
          type="email"
          id="email"
          required
        ></input>
        <label htmlFor="location">Location</label>
        <input
          name="location"
          value={this.props.current.location.temp}
          onChange={this.props.changing}
          type="text"
          id="location"
        ></input>
        <label htmlFor="website">Website</label>
        <input
          name="website"
          value={this.props.current.website.temp}
          onChange={this.props.changing}
          type="text"
          id="website"
        ></input>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default ContactForm;
