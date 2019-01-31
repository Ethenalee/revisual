import React, {Component} from 'react';
import { Navbar } from 'react-bootstrap';

class Nav extends Component {

  render() {
    return (
      <Navbar>
        <Navbar.Collapse>
          <div className="go-main">
            <Navbar.Text className="go-Home">
              <Navbar.Link href="/">REvisual</Navbar.Link>
            </Navbar.Text>
          </div>
          <div className="signin-register">
            <Navbar.Text className="register">
              <Navbar.Link href="#">Register</Navbar.Link>
            </Navbar.Text>
            <Navbar.Text className="signin">Welcome Ethena!</Navbar.Text>
          </div>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Nav;



