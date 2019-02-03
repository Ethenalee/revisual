import React, {Component} from 'react';
import MunicipalityComparisonDetailsTable from './MunicipalityDetailsTable';
import MunicipalityComparisonDetailsChart from './MunicipalityDetailsChart';

//Report Details page general content
class MunicipalityComparisonReport extends Component {
  constructor() {
    super();
  }

  render() {
    const data = this.props.data;
    const duration = this.props.duration;
    const sale_lease = this.props.sale_lease;
    const comparisonAreacode = this.props.comparisonAreacode; 
    const comparisonMunipality = this.props.comparisonMunipality;
    return (
      <div className="details-table">
          ALT REPORT<br/><br/>
          <MunicipalityComparisonDetailsTable data = {data} duration={duration} comparisonAreacode={comparisonAreacode} comparisonMunipality={comparisonMunipality} sale_lease={sale_lease}/>
          <MunicipalityComparisonDetailsChart data = {data} duration={duration} comparisonAreacode={comparisonAreacode} comparisonMunipality={comparisonMunipality} sale_lease={sale_lease}/>
      </div>
    );
  }
}
export default MunicipalityComparisonReport;