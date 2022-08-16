import React, { Component } from 'react';
import './App.css';
import uniqid from 'uniqid';

import Name from '../src/components/Name';
import Profile from '../src/components/Profile';
import Work from '../src/components/Work';
import PersonalForm from './components/PersonalForm';
import ProfileForm from './components/ProfileForm';
import WorkForm from './components/WorkForm';
import EducationForm from './components/EducationForm';
import Education from './components/Education';
import ContactForm from './components/ContactForm';
import Contact from './components/Contact';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.onNameSubmit = this.onNameSubmit.bind(this);
    this.onNameEdit = this.onNameEdit.bind(this);

    this.handleContactChange = this.handleContactChange.bind(this);
    this.onContactSubmit = this.onContactSubmit.bind(this);
    this.onContactEdit = this.onContactEdit.bind(this);

    this.handleProfileChange = this.handleProfileChange.bind(this);
    this.onProfileSubmit = this.onProfileSubmit.bind(this);
    this.onProfileEdit = this.onProfileEdit.bind(this);

    this.handleWorkChange = this.handleWorkChange.bind(this);
    this.onWorkSubmit = this.onWorkSubmit.bind(this);
    this.onWorkEdit = this.onWorkEdit.bind(this);
    this.onWorkEditSave = this.onWorkEditSave.bind(this);
    this.onNextWorkEdit = this.onNextWorkEdit.bind(this);
    this.onPrevWorkEdit = this.onPrevWorkEdit.bind(this);

    this.handleSchoolChange = this.handleSchoolChange.bind(this);
    this.onEducationEdit = this.onEducationEdit.bind(this);
    this.onEducationSubmit = this.onEducationSubmit.bind(this);
    this.onNextEducationEdit = this.onNextEducationEdit.bind(this);
    this.onPrevEducationEdit = this.onPrevEducationEdit.bind(this);
    this.onEducationEditSave = this.onEducationEditSave.bind(this);

    this.state = {
      edits: {
        name: false,
        contact: false,
        profile: false,
        work: false,
        education: false,
      },
      name: {
        temp: '',
        saved: '',
      },
      contact: {
        tel: {
          temp: '',
          saved: '',
        },
        email: {
          temp: '',
          saved: '',
        },
        location: {
          temp: '',
          saved: '',
        },
        website: {
          temp: '',
          saved: '',
        },
        completed: false,
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
      education: {
        school: '',
        level: '',
        studied: '',
        from: '',
        to: '',
        grade: '',
        id: uniqid(),
      },
      educationHistory: [],
      educationCounter: 0,
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
    const edits = this.state.edits;
    edits.name = false;
    this.setState({
      edits: edits,
      name: {
        saved: this.state.name.temp,
        temp: '',
      },
    });
  }

  onNameEdit(event) {
    event.preventDefault();
    let edits = this.state.edits;
    edits.name = true;

    this.setState({ edits: edits }, () => {
      const editName = this.state.name;
      editName.temp = this.state.name.saved;
      this.setState({
        name: editName,
      });
    });
  }

  handleContactChange(event) {
    const name = event.target.name;
    let revisedInputs = this.state.contact;
    switch (name) {
      case 'tel':
        revisedInputs.tel.temp = event.target.value;
        break;
      case 'email':
        revisedInputs.email.temp = event.target.value;
        break;
      case 'location':
        revisedInputs.location.temp = event.target.value;
        break;
      case 'website':
        revisedInputs.website.temp = event.target.value;
        break;
      default:
        console.log('default');
    }

    this.setState({
      contact: revisedInputs,
    });
  }

  onContactSubmit(event) {
    event.preventDefault();
    let edits = this.state.edits;
    edits.contact = false;
    let savedContact = this.state.contact;
    savedContact.tel.saved = this.state.contact.tel.temp;
    savedContact.tel.temp = '';
    savedContact.email.saved = this.state.contact.email.temp;
    savedContact.email.temp = '';
    savedContact.location.saved = this.state.contact.location.temp;
    savedContact.location.temp = '';
    savedContact.website.saved = this.state.contact.website.temp;
    savedContact.website.temp = '';
    savedContact.completed = true;

    this.setState({
      edits: edits,
      contact: savedContact,
    });
  }

  onContactEdit(event) {
    event.preventDefault();
    let edits = this.state.edits;
    edits.contact = true;

    let savedContact = this.state.contact;
    savedContact.tel.temp = this.state.contact.tel.saved;
    savedContact.email.temp = this.state.contact.email.saved;
    savedContact.location.temp = this.state.contact.location.saved;
    savedContact.website.temp = this.state.contact.website.saved;
    savedContact.completed = false;

    this.setState({
      edits: edits,
      contact: savedContact,
    });
  }

  handleProfileChange(event) {
    let tempProfile = this.state.profile;
    tempProfile.temp = event.target.value;
    this.setState({ profile: tempProfile });
  }

  onProfileSubmit(event) {
    event.preventDefault();
    let edits = this.state.edits;
    edits.profile = false;

    this.setState({
      edits: edits,
      profile: {
        saved: this.state.profile.temp,
        temp: '',
      },
    });
  }

  onProfileEdit(event) {
    event.preventDefault();
    let edits = this.state.edits;
    edits.profile = true;

    this.setState({ edits: edits }, () => {
      const profileEdit = this.state.profile;
      profileEdit.temp = this.state.profile.saved;
      this.setState({
        profile: profileEdit,
      });
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
    console.log('dog');
    if (this.state.workHistory.length > 0) {
      let edits = this.state.edits;
      edits.work = true;

      this.setState({ edits: edits }, () => {
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

  onWorkEditSave(event) {
    event.preventDefault();
    let edits = this.state.edits;
    edits.work = false;
    const editedRole = this.state.work;
    const revisedHistory = this.state.workHistory;
    revisedHistory.splice(this.state.profileCounter, 1, editedRole);
    this.setState({
      edits: edits,
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

  handleSchoolChange(event) {
    const name = event.target.name;
    let revisedInputs = this.state.education;
    switch (name) {
      case 'school':
        revisedInputs.school = event.target.value;
        break;
      case 'level':
        revisedInputs.level = event.target.value;
        break;
      case 'from':
        revisedInputs.from = event.target.value;
        break;
      case 'to':
        revisedInputs.to = event.target.value;
        break;
      case 'grade':
        revisedInputs.grade = event.target.value;
        break;
      default:
        console.log('default');
    }

    this.setState({
      education: revisedInputs,
    });
  }

  onEducationSubmit(event) {
    event.preventDefault();
    this.setState({
      educationHistory: this.state.educationHistory.concat(
        this.state.education
      ),
      education: {
        school: '',
        level: '',
        from: '',
        to: '',
        grade: '',
        id: uniqid(),
      },
    });
  }

  onEducationEdit(event) {
    event.preventDefault();

    if (this.state.educationHistory.length > 0) {
      let edits = this.state.edits;
      edits.education = true;

      this.setState({ edits: edits }, () => {
        const inst = this.state.educationHistory[this.state.educationCounter];
        this.setState({
          education: {
            school: inst.school,
            level: inst.level,
            from: inst.from,
            to: inst.to,
            grade: inst.grade,
            id: inst.id,
          },
        });
      });
    }
  }

  onNextEducationEdit(event) {
    event.preventDefault();
    if (this.state.educationCounter < this.state.educationHistory.length - 1) {
      this.setState(
        { educationCounter: this.state.educationCounter + 1 },
        () => {
          const inst = this.state.educationHistory[this.state.educationCounter];
          this.setState({
            education: {
              school: inst.school,
              level: inst.level,
              from: inst.from,
              to: inst.to,
              grade: inst.grade,
              id: inst.id,
            },
          });
        }
      );
    }
  }

  onPrevEducationEdit(event) {
    event.preventDefault();
    if (this.state.educationCounter >= 1) {
      this.setState(
        { educationCounter: this.state.educationCounter - 1 },
        () => {
          const inst = this.state.educationHistory[this.state.educationCounter];
          this.setState({
            education: {
              school: inst.school,
              level: inst.level,
              from: inst.from,
              to: inst.to,
              grade: inst.grade,
              id: inst.id,
            },
          });
        }
      );
    }
  }

  onEducationEditSave(event) {
    event.preventDefault();
    let edits = this.state.edits;
    edits.education = false;
    const editedInst = this.state.education;
    const revisedHistory = this.state.educationHistory;
    revisedHistory.splice(this.state.educationCounter, 1, editedInst);
    this.setState({
      edits: edits,
      educationHistory: revisedHistory,
      education: {
        school: '',
        level: '',
        from: '',
        to: '',
        grade: '',
        id: uniqid(),
      },
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="inputs">
          <h1>CV Builder</h1>
          <div className="all-inputs">
            <h3>Name</h3>
            <PersonalForm
              completed={this.state.name.saved}
              editActive={this.state.edits.name}
              submitting={this.onNameSubmit}
              changing={this.handleNameChange}
              name={this.state.name.temp}
              editing={this.onNameEdit}
            />
            <h3>Contact Info.</h3>
            <ContactForm
              submitting={this.onContactSubmit}
              changing={this.handleContactChange}
              editActive={this.state.edits.contact}
              current={this.state.contact}
              editing={this.onContactEdit}
            />

            <h3>Personal Profile</h3>
            <ProfileForm
              completed={this.state.profile.saved}
              editActive={this.state.edits.profile}
              submitting={this.onProfileSubmit}
              changing={this.handleProfileChange}
              editing={this.onProfileEdit}
              text={this.state.profile.temp}
            />
            <h3>Work History</h3>
            <WorkForm
              length={this.state.workHistory.length}
              editActive={this.state.edits.work}
              submitting={this.onWorkSubmit}
              changing={this.handleWorkChange}
              current={this.state.work}
              editing={this.onWorkEdit}
              nextEdit={this.onNextWorkEdit}
              prevEdit={this.onPrevWorkEdit}
              saveEdit={this.onWorkEditSave}
            />
            <h3>Education History</h3>
            <EducationForm
              length={this.state.educationHistory.length}
              changing={this.handleSchoolChange}
              editActive={this.state.edits.education}
              current={this.state.education}
              editing={this.onEducationEdit}
              submitting={this.onEducationSubmit}
              nextEdit={this.onNextEducationEdit}
              prevEdit={this.onPrevEducationEdit}
              saveEdit={this.onEducationEditSave}
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
              <Contact current={this.state.contact} />
              <Education roles={this.state.educationHistory} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
