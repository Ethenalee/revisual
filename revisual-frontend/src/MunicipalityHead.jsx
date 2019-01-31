import React, {Component} from 'react';

// municipality search page header text
class MunicipalityHead extends Component {

  render() {
    return (
      <div className="head">
        <div className="head-small">
          <span>Find your areas' market trends.</span>&nbsp;<span>What's new?</span>
        </div>
        <div className="head-big">
          <div>
            <h1 id="head-big-one">To Search Only Your Area&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
          </div>
          <div>
            <h1 id="head-big-two">To Receive Most Recent Market Stats&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
          </div>
        </div>
      </div>
    );
  }
}
export default MunicipalityHead;