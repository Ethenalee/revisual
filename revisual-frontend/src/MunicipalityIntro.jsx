import React, {Component} from 'react';

// Municipality Search page step by step instructions 
class MunicipalityInfro extends Component {

  render() {
    return (
      <div className="intro">
        <div className="steps-all">
          <p className="steps one">Step 1</p>
          <p className="steps-description one">&nbsp;&nbsp;&nbsp;Please select the sale type, you want</p>
          <p className="steps two">Step 2</p>
          <p className="steps-description two">&nbsp;&nbsp;&nbsp;Please select the duration, you want</p>
          <p className="steps three">Step 3</p>
          <p className="steps-description three">&nbsp;&nbsp;&nbsp;Please select the municipality, you want</p>
        </div>
      </div>
    );
  }
}
export default MunicipalityInfro;