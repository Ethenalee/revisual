import React, {Component} from 'react';
import { SketchPicker } from 'react-color';

// Report Details header
class MunicipalityDetailsFilter extends Component {

  render() {
    return (
      <div className="details-filter">
        <SketchPicker
        color={ this.props.color }
        onChangeComplete={ this.props.handleChangeComplete }
        />
      </div>
    );
  }
}
export default MunicipalityDetailsFilter;