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
            <div className="SignIn-Register">
            <Navbar.Text className="Register">
            <Navbar.Link href="#">Register</Navbar.Link>
            </Navbar.Text>
            <Navbar.Text className="SignIn">Welcom Ethena!</Navbar.Text>
            </div>
          </Navbar.Collapse>
        </Navbar>
        <Map />
      </div>
    );
  }
}

export default App;
