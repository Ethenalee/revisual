import React, {Component} from 'react';
import MunicipalityDetailsTable from './MunicipalityDetailsTable';
import MunicipalityDetailsChart from './MunicipalityDetailsChart';

//Report Details page general content
class MunicipalityReport extends Component {

  render() {
    const data = this.props.data;
    const duration = this.props.duration;
    const sale_lease = this.props.sale_lease;
    return (
      <div className="details-table">
          <MunicipalityDetailsTable data = {data} duration={duration} sale_lease={sale_lease}/>
          <MunicipalityDetailsChart data = {data} duration={duration} sale_lease={sale_lease}/>
      </div>
    );
  }
}
export default MunicipalityReport;