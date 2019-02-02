import React, {Component} from 'react';
import { SketchPicker } from 'react-color';

// Report Details header
class MunicipalityDetailsFilter extends Component {


  classNameChange = (e) => {
    this.props.classNameChange(e.target.value);
  }

  render() {
    return (
      <div className="details-filter">
        <div className="class-filter">
          <div className="class-form-group">
            <label className="class-form-label" htmlFor="color-pick" >Color pick</label>
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
      </div>
    );
  }
}
export default MunicipalityDetailsFilter;