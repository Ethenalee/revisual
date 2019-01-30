import React, {Component} from 'react';
import MunicipalityDetailsHead from './MunicipalityDetailsHead';

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
          <div className="brief">
          March Market Status
          <div>{data.average_sold_price}</div>
          <div>{data.municipality.municipality}</div>
          <div>{duration}</div>
          <div>{sale_lease}</div>
          </div>
        </div>
      </section>
    );
  }
}
export default MunicipalityDetails;