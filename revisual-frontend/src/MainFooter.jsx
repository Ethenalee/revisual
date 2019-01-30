import React, {Component} from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Footer extends Component {
  
  render() {
    return (
      <div>
        <div> 
          <Link className="button-text" to="/municipalitysearch">Get Started!</Link>
        </div>
        <div className="footer">
        </div>
      </div>
    );
  }
}
export default Footer;