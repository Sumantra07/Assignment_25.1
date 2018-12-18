import React, { Component } from 'react';
import {PageHeader} from 'react-bootstrap';
import logo from './logo.svg';
//import './App.css';
import User from './components/User.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <PageHeader>Hi, This is a react app</PageHeader>
      <User/>
      </div>
    );
  }
}

export default App;
