import React, {Component} from 'react';
import MunicipalityDetailsHead from './MunicipalityDetailsHead';
import MunicipalityReport from './MunicipalityReport';
import MunicipalityDetailsReportSummary from './MunicipalityDetailsReportSummary';
import MunicipalityDetailsFooter from './MunicipalityDetailsFooter';
import MunicipalityReportHead from './MunicipalityReportHead';
import MunicipalityDetailsFilter from './MunicipalityDetailsFilter';
import { SketchPicker } from 'react-color';



//Report Details page general content
class MunicipalityDetails extends Component {
  constructor() {
    super()
    this.state = {
      color: 'rgb(52, 67, 141)',
      classNameChange: "None"
    }
  }

  handleChangeComplete = (colors) => {
    this.setState({ color: colors.hex });
  };

  classNameChange = (name) => {
    this.setState({
    classNameChange: name
    });
  }

  render() {
    const data = this.props.location.state.data;
    const sale_lease = this.props.location.state.sale_lease;
    const duration = this.props.location.state.duration;
    
    return (
      <section className="third-page">
        <MunicipalityDetailsHead/>
        <div className="details-main">
          <MunicipalityDetailsFilter color={this.state.color} classNameChange={this.classNameChange} handleChangeComplete={this.handleChangeComplete}/>
        <div className="details page">
          <MunicipalityReportHead classNameChange={this.state.classNameChange} color={this.state.color} data={data} sale_lease={sale_lease} duration={duration}/>
          <MunicipalityReport  classNameChange={this.state.classNameChange} color={this.state.color} data={data} sale_lease={sale_lease}/>
          <MunicipalityDetailsReportSummary/>
          <MunicipalityDetailsFooter/>
        </div>
        </div>
      </section>
    );
  }
}
export default MunicipalityDetails;