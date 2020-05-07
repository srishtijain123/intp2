import React, { Component } from "react";
import axios from "axios";
//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangePhone(e) {
    this.setState({
      phone: e.target.value,
    });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeMessage(e) {
    this.setState({
      message: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const contactUsForm = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message,
    };

    axios
      .post("http://localhost:5000/contactUs/add", contactUsForm)
      .then(() => (window.location = "/"));
  }

  render() {
    return (
      <div>
        <h3>Contact Us</h3>
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
            <label>Phone: </label>
            <input
              type="number"
              required
              className="form-control"
              value={this.state.phone}
              onChange={this.onChangePhone}
            />
          </div>
          <div className="form-group">
            <label>Message: </label>
            <textarea
              required
              className="form-control"
              value={this.state.message}
              onChange={this.onChangeMessage}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Submit Inquiry"
              className="btn btn-primary btn-md btn-block ml-0 mb-0"
            />
          </div>
        </form>
      </div>
    );
  }
}
