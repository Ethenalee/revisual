import React, { Component } from 'react';
import check from './images/check.png'

// Municipality Search page step by step instructions
class MunicipalityInfro extends Component {

  render() {
    return (
      <div className="intro">
        <div className="steps-all">
          <p className="steps one">Step 1{this.props.sale_lease && <span><img className="check-mark" alt="check" src={check} /></span>}</p>
          <p className="steps-description one">&nbsp;&nbsp;&nbsp;Select a listing type</p>
          <p className="steps two">Step 2{this.props.duration && <span><img className="check-mark" alt="check" src={check} /></span>}</p>
          <p className="steps-description two">&nbsp;&nbsp;&nbsp;Select the report’s timescale</p>
          <p className="steps three">Step 3</p>
          <p className="steps-description three">&nbsp;&nbsp;&nbsp;Select your municipality</p>
        </div>
      </div>
    );
  }
}
export default MunicipalityInfro;