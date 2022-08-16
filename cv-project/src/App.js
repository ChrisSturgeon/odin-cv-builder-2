import React, { Component } from 'react';
import './App.css';
import uniqid from 'uniqid';

import Name from '../src/components/Name';
import Profile from '../src/components/Profile';
import Work from '../src/components/Work';
import PersonalForm from './components/PersonalForm';
import ProfileForm from './components/ProfileForm';
import WorkForm from './components/WorkForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.onNameSubmit = this.onNameSubmit.bind(this);
    this.onNameEdit = this.onNameEdit.bind(this);
    this.handleProfileChange = this.handleProfileChange.bind(this);
    this.onProfileSubmit = this.onProfileSubmit.bind(this);
    this.onProfileEdit = this.onProfileEdit.bind(this);
    this.handleWorkChange = this.handleWorkChange.bind(this);
    this.onWorkSubmit = this.onWorkSubmit.bind(this);
    this.onWorkEdit = this.onWorkEdit.bind(this);
    this.onWorkEditSave = this.onWorkEditSave.bind(this);
    this.onNextWorkEdit = this.onNextWorkEdit.bind(this);
    this.onPrevWorkEdit = this.onPrevWorkEdit.bind(this);

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
        company: '',
        position: '',
        from: '',
        to: '',
        description: '',
        id: uniqid(),
      },
      workHistory: [],
      profileCounter: 0,
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
    const edits = this.state.edits;
    const editName = this.state.name;
    editName.temp = this.state.name.saved;
    this.setState({
      edit: edits,
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
        revisedInputs.company = event.target.value;
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
    if (this.state.workHistory.length > 0) {
      const role = this.state.workHistory[this.state.profileCounter];
      this.setState({
        work: {
          company: role.company,
          position: role.position,
          from: role.from,
          to: role.to,
          description: role.description,
          id: role.id,
        },
      });
    }
  }

  onWorkEditSave(event) {
    event.preventDefault();
    const editedRole = this.state.work;
    const revisedHistory = this.state.workHistory;
    revisedHistory.splice(this.state.profileCounter, 1, editedRole);
    this.setState({
      workHistory: revisedHistory,
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

  onNextWorkEdit(event) {
    event.preventDefault();
    if (this.state.profileCounter < this.state.workHistory.length - 1) {
      this.setState({ profileCounter: this.state.profileCounter + 1 }, () => {
        const role = this.state.workHistory[this.state.profileCounter];
        this.setState({
          work: {
            company: role.company,
            position: role.position,
            from: role.from,
            to: role.to,
            description: role.description,
            id: role.id,
          },
        });
      });
    }
  }

  onPrevWorkEdit(event) {
    event.preventDefault();
    if (this.state.profileCounter >= 1) {
      this.setState({ profileCounter: this.state.profileCounter - 1 }, () => {
        const role = this.state.workHistory[this.state.profileCounter];
        this.setState({
          work: {
            company: role.company,
            position: role.position,
            from: role.from,
            to: role.to,
            description: role.description,
            id: role.id,
          },
        });
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="inputs">
          <h1>CV Builder</h1>
          <div className="all-inputs">
            <h3>Personal Info.</h3>
            <PersonalForm
              submitting={this.onNameSubmit}
              changing={this.handleNameChange}
              name={this.state.name.temp}
              editing={this.onNameEdit}
            />
            <h3>Summary</h3>
            <ProfileForm
              submitting={this.onProfileSubmit}
              changing={this.handleProfileChange}
              editing={this.onProfileEdit}
              text={this.state.profile.temp}
            />
            <h3>Work Experience</h3>
            <WorkForm
              submitting={this.onWorkSubmit}
              changing={this.handleWorkChange}
              current={this.state.work}
              editing={this.onWorkEdit}
              nextEdit={this.onNextWorkEdit}
              prevEdit={this.onPrevWorkEdit}
              saveEdit={this.onWorkEditSave}
            />
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
