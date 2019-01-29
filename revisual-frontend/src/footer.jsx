import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Footer extends Component {
  
  render() {
    return (
      <div>
        <div> 
          <Link className="button-text" to="/marketsearch">Get Started!</Link>
        </div>
        <div className="footer">
        </div>
      </div>
    );
  }
}
export default Footer;