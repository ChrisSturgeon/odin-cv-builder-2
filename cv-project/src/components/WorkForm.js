import React, { Component } from 'react';

class WorkForm extends Component {
  render() {
    if (this.props.length === 0) {
      return (
        <form onSubmit={this.props.submitting}>
          <label htmlFor="company">Company</label>
          <input
            value={this.props.current.company}
            onChange={this.props.changing}
            name="company"
            id="company"
            type="text"
            required
          ></input>
          <label htmlFor="position">Position</label>
          <input
            value={this.props.current.position}
            onChange={this.props.changing}
            name="position"
            id="position"
            type="text"
            required
          ></input>
          <label htmlFor="startDate">From</label>
          <input
            value={this.props.current.from}
            onChange={this.props.changing}
            name="from"
            type="month"
            required
          ></input>
          <label htmlFor="startDate">To</label>
          <input
            value={this.props.current.to}
            onChange={this.props.changing}
            name="to"
            type="month"
          ></input>
          <label htmlFor="roleDescription">Description</label>
          <textarea
            value={this.props.current.description}
            id="roleDescription"
            onChange={this.props.changing}
            name="description"
            placeholder="An overview of the role, including main tasks... "
          ></textarea>
          <button type="submit">Add New</button>
        </form>
      );
    } else if (this.props.length > 0 && this.props.editActive) {
      return (
        <form onSubmit={this.props.submitting}>
          <label htmlFor="company">Company</label>
          <input
            value={this.props.current.company}
            onChange={this.props.changing}
            name="company"
            id="company"
            type="text"
            required
          ></input>
          <label htmlFor="position">Position</label>
          <input
            value={this.props.current.position}
            onChange={this.props.changing}
            name="position"
            id="position"
            type="text"
            required
          ></input>
          <label htmlFor="startDate">From</label>
          <input
            value={this.props.current.from}
            onChange={this.props.changing}
            name="from"
            type="month"
            required
          ></input>
          <label htmlFor="startDate">To</label>
          <input
            value={this.props.current.to}
            onChange={this.props.changing}
            name="to"
            type="month"
          ></input>
          <label htmlFor="roleDescription">Description</label>
          <textarea
            value={this.props.current.description}
            id="roleDescription"
            onChange={this.props.changing}
            name="description"
            placeholder="An overview of the role, including main tasks... "
          ></textarea>
          <button onClick={this.props.nextEdit}>Next Role</button>
          <button onClick={this.props.prevEdit}>Previous Role</button>
          <button onClick={this.props.saveEdit}>Save Edit</button>
        </form>
      );
    }
    return (
      <form onSubmit={this.props.submitting}>
        <label htmlFor="company">Company</label>
        <input
          value={this.props.current.company}
          onChange={this.props.changing}
          name="company"
          id="company"
          type="text"
          required
        ></input>
        <label htmlFor="position">Position</label>
        <input
          value={this.props.current.position}
          onChange={this.props.changing}
          name="position"
          id="position"
          type="text"
          required
        ></input>
        <label htmlFor="startDate">From</label>
        <input
          value={this.props.current.from}
          onChange={this.props.changing}
          name="from"
          type="month"
          required
        ></input>
        <label htmlFor="startDate">To</label>
        <input
          value={this.props.current.to}
          onChange={this.props.changing}
          name="to"
          type="month"
        ></input>
        <label htmlFor="roleDescription">Description</label>
        <textarea
          value={this.props.current.description}
          id="roleDescription"
          onChange={this.props.changing}
          name="description"
          placeholder="An overview of the role, including main tasks... "
        ></textarea>
        <button type="submit">Add New</button>
        <button onClick={this.props.editing}>Edit</button>
      </form>
    );
  }
}

export default WorkForm;
