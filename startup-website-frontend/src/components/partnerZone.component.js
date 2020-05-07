import React, { Component } from "react";
import axios from "axios";
//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class PartnerZone extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeContact = this.onChangeContact.bind(this);
    this.onChangeExperience = this.onChangeExperience.bind(this);
    this.onChangeOrgType = this.onChangeOrgType.bind(this);
    this.onChangeOrgName = this.onChangeOrgName.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      orgType: "",
      orgName: "",
      name: "",
      email: "",
      contact: "",
      experience: "",
      users: [
        "Select",
        "Placement Agency",
        "Freelancer",
        "NGO",
        "Training Institute",
        "Cyber Cafe",
        "Colleges",
      ],
    };
  }

  onChangeOrgType(e) {
    this.setState({
      orgType: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangeContact(e) {
    this.setState({
      contact: e.target.value,
    });
  }
  onChangeOrgName(e) {
    this.setState({
      orgName: e.target.value,
    });
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeExperience(e) {
    this.setState({
      experience: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const partnerForm = {
      orgType: this.state.orgType,
      orgName: this.state.orgName,
      name: this.state.name,
      email: this.state.email,
      contact: this.state.contact,
      experience: this.state.experience,
    };

    axios
      .post("http://localhost:5000/partnerZone/add", partnerForm)
      .then(() => (window.location = "/"));
  }

  render() {
    return (
      <div>
        <h3>Partner Zone Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Organisation Type: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.orgType}
              onChange={this.onChangeOrgType}
            >
              {this.state.users.map(function (user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Organisation Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.orgName}
              onChange={this.onChangeOrgName}
            />
          </div>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group">
            <label>Contact: </label>
            <input
              type="number"
              required
              className="form-control"
              value={this.state.contact}
              onChange={this.onChangeContact}
            />
          </div>
          <div className="form-group">
            <label>Experience: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.experience}
              onChange={this.onChangeExperience}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
