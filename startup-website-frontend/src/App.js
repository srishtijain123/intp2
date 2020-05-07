/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import CandidateZone from "./components/candidateZone.component";
import Home from "./components/home.component";
import EmployerZone from "./components/employerZone.component";
import PartnerZone from "./components/partnerZone.component";
import Footer from "./components/footer.component";
import ContactUs from "./components/contactUs.component";
import AboutUs from "./components/aboutUs.component";
import StyleSheet from './components/Stylesheet';
function App() {
  return (
    <Router>
      <div className="navbar">
        <StyleSheet />
        <Navbar />
        <br />
        <Route path="/" exact component={Home} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/employerZone" component={EmployerZone} />
        <Route path="/partnerZone" component={PartnerZone} />
        <Route path="/candidateZone" component={CandidateZone} />
        <Route path="/contactUs" component={ContactUs} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
