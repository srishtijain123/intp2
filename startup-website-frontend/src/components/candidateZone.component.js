import React, { Component } from "react";
import axios from "axios";
//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CandidateZone extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeContact = this.onChangeContact.bind(this);
    this.onChangeFatherName = this.onChangeFatherName.bind(this);
    this.onChangeEducation = this.onChangeEducation.bind(this);
    this.onChangePanNumber = this.onChangePanNumber.bind(this);
    this.onChangeAadharNumber = this.onChangeAadharNumber.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeLastSalary = this.onChangeLastSalary.bind(this);
    this.onChangeLastCompany = this.onChangeLastCompany.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      contact: "",
      fatherName: "",
      education: "",
      panNumber: "",
      aadharNumber: "",
      location: "",
      lastSalary: "",
      lastCompany: "",
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
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
  onChangeFatherName(e) {
    this.setState({
      fatherName: e.target.value,
    });
  }
  onChangeEducation(e) {
    this.setState({
      education: e.target.value,
    });
  }

  onChangePanNumber(e) {
    this.setState({
      panNumber: e.target.value,
    });
  }
  onChangeAadharNumber(e) {
    this.setState({
      aadharNumber: e.target.value,
    });
  }
  onChangeLocation(e) {
    this.setState({
      location: e.target.value,
    });
  }
  onChangeLastSalary(e) {
    this.setState({
      lastSalary: e.target.value,
    });
  }
  onChangeLastCompany(e) {
    this.setState({
      lastCompany: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const candidateForm = {
      name: this.state.name,
      email: this.state.email,
      contact: this.state.contact,
      fatherName: this.state.fatherName,
      education: this.state.education,
      panNumber: this.state.panNumber,
      aadharNumber: this.state.aadharNumber,
      location: this.state.location,
      lastSalary: this.state.lastSalary,
      lastCompany: this.state.lastCompany,
    };

    axios
      .post("http://localhost:5000/candidateZone/add", candidateForm)
      .then(() => (window.location = "/"));
  }

  render() {
    return (
      <div>
        <h3>Condidate Zone Log</h3>
        <form onSubmit={this.onSubmit}>
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
            <label>Father Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.fatherName}
              onChange={this.onChangeFatherName}
            />
          </div>
          <div className="form-group">
            <label>Education: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.education}
              onChange={this.onChangeEducation}
            />
          </div>
          <div className="form-group">
            <label>PAN Number: </label>
            <input
              type="number"
              required
              className="form-control"
              value={this.state.panNumber}
              onChange={this.onChangePanNumber}
            />
          </div>
          <div className="form-group">
            <label>Aadhar Number: </label>
            <input
              type="number"
              required
              className="form-control"
              value={this.state.aadharNumber}
              onChange={this.onChangeAadharNumber}
            />
          </div>
          <div className="form-group">
            <label>Location: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.location}
              onChange={this.onChangeLocation}
            />
          </div>
          <div className="form-group">
            <label>Last Salary: </label>
            <input
              type="number"
              required
              className="form-control"
              value={this.state.lastSalary}
              onChange={this.onChangeLastSalary}
            />
          </div>
          <div className="form-group">
            <label>Last Company: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.lastCompany}
              onChange={this.onChangeLastCompany}
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
