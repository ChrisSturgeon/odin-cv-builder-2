import React, { Component } from 'react';

class EducationForm extends Component {
  render() {
    if (this.props.length === 0) {
      return (
        <form onSubmit={this.props.submitting}>
          <label htmlFor="school">School</label>
          <input
            value={this.props.current.school}
            onChange={this.props.changing}
            name="school"
            id="school"
            type="text"
            required
          ></input>
          <label htmlFor="level">Level</label>
          <input
            value={this.props.current.level}
            onChange={this.props.changing}
            name="level"
            id="level"
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
          <label htmlFor="grade">Grade</label>
          <input
            value={this.props.current.grade}
            id="grade"
            onChange={this.props.changing}
            name="grade"
          ></input>
          <button type="submit">Add New</button>
        </form>
      );
    } else if (this.props.length > 0 && this.props.editActive) {
      return (
        <form onSubmit={this.props.submitting}>
          <label htmlFor="school">School</label>
          <input
            value={this.props.current.school}
            onChange={this.props.changing}
            name="school"
            id="school"
            type="text"
            required
          ></input>
          <label htmlFor="level">Level</label>
          <input
            value={this.props.current.level}
            onChange={this.props.changing}
            name="level"
            id="level"
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
          <label htmlFor="grade">Grade</label>
          <input
            value={this.props.current.grade}
            id="grade"
            onChange={this.props.changing}
            name="grade"
          ></input>
          <button onClick={this.props.nextEdit}>Next School</button>
          <button onClick={this.props.prevEdit}>Previous School</button>
          <button onClick={this.props.saveEdit}>Save Edit</button>
        </form>
      );
    }
    return (
      <form onSubmit={this.props.submitting}>
        <label htmlFor="school">School</label>
        <input
          value={this.props.current.school}
          onChange={this.props.changing}
          name="school"
          id="school"
          type="text"
          required
        ></input>
        <label htmlFor="level">Level</label>
        <input
          value={this.props.current.level}
          onChange={this.props.changing}
          name="level"
          id="level"
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
        <label htmlFor="grade">Grade</label>
        <input
          value={this.props.current.grade}
          id="grade"
          onChange={this.props.changing}
          name="grade"
        ></input>
        <button type="submit">Add Another</button>
        <button onClick={this.props.editing}>Edit existing</button>
      </form>
    );
  }
}

export default EducationForm;
