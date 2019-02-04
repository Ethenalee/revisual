import React, {Component} from 'react';
import {RIETextArea} from 'riek';
import _ from 'lodash';

class MunicipalityDetailsReportSummary extends Component {
  constructor() {
    super();

    this.state = {
        textarea: `Customize Messages for Your Business here`,
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
    return number % 2 === 0;
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
      <div className="report-summary" >
        <RIETextArea
          value={this.state.textarea}
          change={this.virtualServerCallback}
          propName="textarea"
          className={this.state.highlight ? "editable" : ""}
          validate={this.isStringAcceptable}
          classLoading="loading"
          classInvalid="invalid"
          isDisabled={this.state.isDisabled} 
          rows="10"
          cols="70"
        />
      </div>
    );
  }
}
export default MunicipalityDetailsReportSummary;