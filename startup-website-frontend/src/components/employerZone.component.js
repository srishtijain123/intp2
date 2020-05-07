import React, { Component } from "react";
import axios from "axios";
//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class EmployerZone extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeContact = this.onChangeContact.bind(this);
    this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
    this.onChangePost = this.onChangePost.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeLetUsKnow = this.onChangeLetUsKnow.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      contact: "",
      companyName: "",
      post: "",
      city: "",
      letUsKnow: "",
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeContact(e) {
    this.setState({
      contact: e.target.value,
    });
  }
  onChangeCompanyName(e) {
    this.setState({
      companyName: e.target.value,
    });
  }
  onChangePost(e) {
    this.setState({
      post: e.target.value,
    });
  }

  onChangeCity(e) {
    this.setState({
      city: e.target.value,
    });
  }
  onChangeLetUsKnow(e) {
    this.setState({
      letUsKnow: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const employerForm = {
      name: this.state.name,
      contact: this.state.contact,
      companyName: this.state.companyName,
      post: this.state.post,
      city: this.state.city,
      letUsKnow: this.state.letUsKnow,
    };

    axios
      .post("http://localhost:5000/employerZone/add", employerForm)
      .then(() => (window.location = "/"));
  }

  render() {
    return (
      <div>
        <h3>Employer Zone Log</h3>
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
            <label>Company Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.companyName}
              onChange={this.onChangeCompanyName}
            />
          </div>
          <div className="form-group">
            <label>Post: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.post}
              onChange={this.onChangePost}
            />
          </div>
          <div className="form-group">
            <label>City: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.city}
              onChange={this.onChangeCity}
            />
          </div>
          <div className="form-group">
            <label>Let Us Know: </label>
            <textarea
              required
              className="form-control"
              value={this.state.letUsKnow}
              onChange={this.onChangeLetUsKnow}
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
