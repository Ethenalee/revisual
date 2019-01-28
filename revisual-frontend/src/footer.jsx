import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Link } from 'react-router-dom';

class Footer extends Component {
  
  render() {
    return (
      <div>
        <div> 
          <Button><Link to="/"><h1 className="button-text" >Get Started!</h1></Link></Button>
        </div>
        <div className="footer">
        </div>
      </div>
    );
  }
}
export default Footer;