import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          IntensePlacements
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/aboutUs" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/employerZone" className="nav-link">
                Employers Zone
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/partnerZone" className="nav-link">
                Partners Zone
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/candidateZone" className="nav-link">
                Candidate Zone
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/contactUs" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

/*const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
};*/
