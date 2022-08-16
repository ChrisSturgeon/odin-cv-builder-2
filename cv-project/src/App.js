import React, { Component } from 'react';
import './App.css';
import uniqid from 'uniqid';

import Name from '../src/components/Name';
import Profile from '../src/components/Profile';
import Work from '../src/components/Work';

class App extends Component {
  constructor() {
    super();

    this.handleNameChange = this.handleNameChange.bind(this);
    this.onNameSubmit = this.onNameSubmit.bind(this);
    this.onNameEdit = this.onNameEdit.bind(this);
    this.handleProfileChange = this.handleProfileChange.bind(this);
    this.onProfileSubmit = this.onProfileSubmit.bind(this);
    this.onProfileEdit = this.onProfileEdit.bind(this);
    this.handleWorkChange = this.handleWorkChange.bind(this);
    this.onWorkSubmit = this.onWorkSubmit.bind(this);

    this.state = {
      name: {
        temp: '',
        saved: '',
      },
      profile: {
        temp: '',
        saved: '',
      },
      work: {
        company: {
          temp: '',
          saved: '',
        },
        position: '',
        from: '',
        to: '',
        description: '',
        id: uniqid(),
      },
      workHistory: [],
    };
  }

  handleNameChange(event) {
    let tempName = this.state.name;
    tempName.temp = event.target.value;
    this.setState({
      name: tempName,
    });
  }

  onNameSubmit(event) {
    event.preventDefault();
    this.setState({
      name: {
        saved: this.state.name.temp,
        temp: '',
      },
    });
  }

  onNameEdit(event) {
    event.preventDefault();
    const editName = this.state.name;
    editName.temp = this.state.name.saved;
    this.setState({
      name: editName,
    });
  }

  handleProfileChange(event) {
    let tempProfile = this.state.profile;
    tempProfile.temp = event.target.value;
    this.setState({ profile: tempProfile });
  }

  onProfileSubmit(event) {
    event.preventDefault();
    this.setState({
      profile: {
        saved: this.state.profile.temp,
        temp: '',
      },
    });
  }

  onProfileEdit(event) {
    event.preventDefault();
    const profileEdit = this.state.profile;
    profileEdit.temp = this.state.profile.saved;
    this.setState({
      profile: profileEdit,
    });
  }

  handleWorkChange(event) {
    const name = event.target.name;
    let revisedInputs = this.state.work;

    switch (name) {
      case 'company':
        revisedInputs.company.temp = event.target.value;
        break;
      case 'position':
        revisedInputs.position = event.target.value;
        break;
      case 'from':
        revisedInputs.from = event.target.value;
        break;
      case 'to':
        revisedInputs.to = event.target.value;
        break;
      case 'description':
        revisedInputs.description = event.target.value;
        break;
      default:
        console.log('default');
    }

    this.setState({
      work: revisedInputs,
    });
  }

  onWorkSubmit(event) {
    event.preventDefault();

    this.setState({
      workHistory: this.state.workHistory.concat(this.state.work),
      work: {
        company: '',
        position: '',
        from: '',
        to: '',
        description: '',
        id: uniqid(),
      },
    });
  }

  onWorkEdit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="wrapper">
        <div className="inputs">
          <h1>CV Builder</h1>
          <div className="all-inputs">
            <h3>Personal Info.</h3>
            <form onSubmit={this.onNameSubmit}>
              <label htmlFor="nameInput">Name</label>
              <input
                value={this.state.name.temp}
                onChange={this.handleNameChange}
                type="text"
                id="nameInput"
                placeholder="e.g. John Doe..."
                required
              ></input>
              <button type="submit">Save</button>
              <button onClick={this.onNameEdit}>Edit</button>
            </form>
            <h3>Summary</h3>
            <form onSubmit={this.onProfileSubmit}>
              <label htmlFor="profileText">Profile Text</label>
              <textarea
                value={this.state.profile.temp}
                id="profileText"
                onChange={this.handleProfileChange}
                placeholder="A brief introduction to outline your attributes, qualities and work experience..."
              ></textarea>
              <button type="submit">Save</button>
              <button onClick={this.onProfileEdit}>Edit</button>
            </form>
            <h3>Work Experience</h3>
            <form onSubmit={this.onWorkSubmit}>
              <label htmlFor="company">Company</label>
              <input
                value={this.state.work.company.temp}
                onChange={this.handleWorkChange}
                name="company"
                id="company"
                type="text"
                required
              ></input>
              <label htmlFor="position">Position</label>
              <input
                value={this.state.work.position}
                onChange={this.handleWorkChange}
                name="position"
                id="position"
                type="text"
                required
              ></input>
              <label htmlFor="startDate">From</label>
              <input
                value={this.state.work.from}
                onChange={this.handleWorkChange}
                name="from"
                type="month"
                required
              ></input>
              <label htmlFor="startDate">To</label>
              <input
                value={this.state.work.to}
                onChange={this.handleWorkChange}
                name="to"
                type="month"
              ></input>
              <label htmlFor="roleDescription">Description</label>
              <textarea
                value={this.state.work.description}
                id="roleDescription"
                onChange={this.handleWorkChange}
                name="description"
                placeholder="An overview of the role, including main tasks... "
              ></textarea>
              <button type="submit">Add</button>
            </form>
          </div>
        </div>
        <div className="display">
          <div className="page">
            <div className="left-col">
              <Name name={this.state.name.saved} />
              <h2>Profile</h2>
              <Profile text={this.state.profile.saved} />
              <Work roles={this.state.workHistory} />
            </div>
            <div className="right-col">
              <p>Hiya</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
