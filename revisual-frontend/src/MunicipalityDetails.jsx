import React, {Component} from 'react';
import MunicipalityDetailsHead from './MunicipalityDetailsHead';
import MunicipalityReport from './MunicipalityReport';
import MunicipalityDetailsReportSummary from './MunicipalityDetailsReportSummary';
import MunicipalityDetailsFooter from './MunicipalityDetailsFooter';
import MunicipalityReportHead from './MunicipalityReportHead';


//Report Details page general content
class MunicipalityDetails extends Component {

  render() {
    const data = this.props.location.state.data;
    const sale_lease = this.props.location.state.sale_lease;
    const duration = this.props.location.state.duration;
    
    return (
      <section className="third-page">
        <MunicipalityDetailsHead/>
        <div className="details page">
          <MunicipalityReportHead data = {data} sale_lease={sale_lease} duration={duration}/>
          <MunicipalityReport data = {data} sale_lease={sale_lease}/>
          <MunicipalityDetailsReportSummary/>
          <MunicipalityDetailsFooter/>
        </div>
      </section>
    );
  }
}
export default MunicipalityDetails;