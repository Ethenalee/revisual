import React, {Component} from 'react';
import MunicipalityDetailsHead from './MunicipalityDetailsHead';
import MunicipalityReport from './MunicipalityReport';
import MunicipalityDetailsReportHead from './MunicipalityDetailsReportHead';
import MunicipalityDetailsReportSummary from './MunicipalityDetailsReportSummary';
import MunicipalityDetailsFooter from './MunicipalityDetailsFooter';

//Report Details page general content
class MunicipalityDetails extends Component {
  constructor() {
    super();
  }

  render() {
    const data = this.props.location.state.data;
    
    return (
      <section className="third-page">
          <MunicipalityDetailsHead/>
          <div className="details page">
            <div className="reportHead">
              <MunicipalityDetailsReportHead/>
            </div>
            <br/>
            <br/>
            <MunicipalityReport data = {data} sale_lease={this.props.location.state.sale_lease}/>
            <br/>
            <div className="reportSummary">
              <MunicipalityDetailsReportSummary/>
            </div>
            <div className="reportFooter">
              <MunicipalityDetailsFooter/>
            </div>
          </div>
      </section>
    );
  }
}
export default MunicipalityDetails;