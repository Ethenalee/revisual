import React, {Component} from 'react';
import MunicipalityDetailsHead from './MunicipalityDetailsHead';
import MunicipalityDetailsTable from './MunicipalityBriefTable';

//Report Details page general content
class MunicipalityDetails extends Component {
  constructor() {
    super();

    this.state = {
     
    };
  }

  render() {
    const data = this.props.location.state.data;
    const duration = this.props.location.state.duration;
    const sale_lease = this.props.location.state.sale_lease;
    return (
      <section className="third-page">
        <MunicipalityDetailsHead/>
        <div className="details">
          <MunicipalityDetailsTable data = {data} duration={duration} sale_lease={sale_lease}/>
        </div>
      </section>
    );
  }
}
export default MunicipalityDetails;