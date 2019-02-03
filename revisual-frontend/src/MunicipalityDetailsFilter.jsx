import React, {Component} from 'react';
import { SketchPicker } from 'react-color';

// Report Details header
class MunicipalityDetailsFilter extends Component {


  classNameChange = (e) => {
    this.props.classNameChange(e.target.value);
  }

  chartNameChange = (e) => {
    this.props.chartNameChange(e.target.value);
  }

  render() {
    return (
      <div className="details-filter">
        <div className="class-filter">
          <div className="class-form-group">
            <label className="class-form-label" htmlFor="chart-pick" >Customize Your Own Chart</label>
            <select onChange={this.chartNameChange} className="form-control">
              <option value="me">Select</option>
              <option value="set-one">Color scheme 1: Blue</option>
              <option value="set-two">Color scheme 2: Pink</option>
              <option value="set-three">Color scheme 3: Green</option>
            </select>
          </div>
          <div className="class-form-group">
            <label className="class-form-label" htmlFor="color-pick" >Customize Your Own</label>
            <select onChange={this.classNameChange} className="form-control">
              <option value="">Select</option>
              <option value="report-market-trends">Head Color</option>
              <option value="report-labels">Body Color</option>
              <option value="font">Font Color</option>
            </select>
          </div>
        </div>
        <SketchPicker
        color={ this.props.color }
        onChangeComplete={ this.props.handleChangeComplete }
        />
        <button className="print-button" onClick={()=>window.print()} >Print Report</button>
      </div>
    );
  }
}
export default MunicipalityDetailsFilter;