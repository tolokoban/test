import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Main from "./view/main"
import About from "./view/about"

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React-Router</h2>
          </div>
          <p className="App-intro">
            <Link to="/main">Main</Link>,
            <Link to="/about">About</Link>...
            <hr/>
            <Route path="/main" component={Main}/>
            <Route path="/about" component={About}/>
          </p>
        </div>
      </Router>
    );
  }
}

export default App;
