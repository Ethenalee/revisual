import React, {Component} from 'react';
import check from './images/check.png'

// Municipality Search page step by step instructions 
class MunicipalityInfro extends Component {

  render() {
    return (
      <div className="intro">
        <div className="steps-all">
          <p className="steps one">Step 1{this.props.sale_lease && <span><img className="check-mark" src={check}/></span>}</p>
          <p className="steps-description one">&nbsp;&nbsp;&nbsp;Please select the sale type, you want</p>
          <p className="steps two">Step 2{this.props.duration && <span><img className="check-mark" src={check}/></span>}</p>
          <p className="steps-description two">&nbsp;&nbsp;&nbsp;Please select the duration, you want</p>
          <p className="steps three">Step 3</p>
          <p className="steps-description three">&nbsp;&nbsp;&nbsp;Please select the municipality, you want</p>
        </div>
      </div>
    );
  }
}
export default MunicipalityInfro;