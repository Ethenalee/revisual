import React, { Component } from 'react';
import './App.css';
import Map from './map.jsx';
import { Navbar } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">REvisual</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Link className="Register" href="#" pullRight>Register</Navbar.Link>
            <Navbar.Text className="SignIn" pullRight>Welcom Ethena!</Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <Map />
      </div>
    );
  }
}

export default App;
