import React, {Component} from 'react';
import { Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class Nav extends Component {

  render() {
    return (
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
    );
  }
}
export default Nav;



