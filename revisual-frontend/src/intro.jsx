import React, {Component} from 'react';
import { Navbar } from 'react-bootstrap';

class Intro extends Component {
  
  render() {
    return (
      <div className="main-section">
        <Navbar>
              <Navbar.Collapse>
                <div className="SignIn-Register">
                  <Navbar.Text className="Register">
                    <Navbar.Link href="#">Register</Navbar.Link>
                  </Navbar.Text>
                  <Navbar.Text className="SignIn">Welcom Ethena!</Navbar.Text>
                </div>
              </Navbar.Collapse>
        </Navbar>
        <h1 className="main-text">REvisual</h1>
      </div>
    );
  }
}
export default Intro;




