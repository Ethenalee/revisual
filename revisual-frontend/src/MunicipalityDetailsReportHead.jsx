import React, {Component} from 'react';
import { RIEInput} from 'riek';
import _ from 'lodash';
import MunicipalityBriefHead from './MunicipalityBriefHead';


class MunicipalityDetailsReportHead extends Component {
  constructor() {
    super();
    this.state = {
      text: "blank",
      text_value_in_header: "Report Summary",
      text_value_in_written_summary:"Insert Text Here",
      isDisabled: false,
      simulateXHR: false,
      XHRDelay: 450,
    };
  }

  virtualServerCallback = (newState) => {
    if (this.state.simulateXHR) {
    window.setTimeout(function() {
      this.changeState(newState);
    }.bind(this), this.state.XHRDelay);
    } else {
    this.changeState(newState);
    }
  };

  changeState = (newState) => {
    this.setState(newState);
  };

  isStringAcceptable = (string) => {
    return (string.length >= 1);  // Minimum 4 letters long
  };

  isStringEvenNumber = (string) => {
    var number = parseInt(string);
    if (isNaN(number) || !isFinite(number)) return false;
    return number % 2 == 0;
  };

  isValidXHRDelay = (text) => {
    let number = parseInt(text);
    if (isNaN(number)) return false;
    return (0 < number) && (number < 50000);
  };

  formatInteger = (number) => {
    return number.toString() + " feet";
  };

  formatMillisecondsAppend = (text) => {
    return text + " ms";
  };

  render() {
    
    return (
      <div className="reportHead">
        <RIEInput
            value={this.state.text_value_in_header}
            change={this.virtualServerCallback}
            propName="text_value_in_header"
            className={this.state.highlight ? "editable" : ""}
            classLoading="loading"
            classInvalid="invalid"
            isDisabled={this.state.isDisabled}/>
      </div>
    );
  }
}
export default MunicipalityDetailsReportHead;