import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Link } from 'react-router-dom';

class MunicipalityHead extends Component {

  render() {
    return (
      <div className="head">
        <div className="head-small">
          <span>Find your areas' market trends.</span>&nbsp;<span>What's new?</span>
        </div>
        <div className="head-big">
          <h1 id="head-big-one">To Search Your Area&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
          <h1 id="head-big-two">To Receive Most Recent Market Stats&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
        </div>
      </div>
    );
  }
}
export default MunicipalityHead;