import React, {Component} from 'react';
import MunicipalityDetailsHead from './MunicipalityDetailsHead';


class MunicipalityDetails extends Component {

  render() {
    const data = this.props.location.state.data
    return (
      <section className="third-page">
        <MunicipalityDetailsHead/>
        <div className="details">
          <div className="brief">
          This is Market detail page
          {data.average_sold_price}
          </div>
        </div>
      </section>
    );
  }
}
export default MunicipalityDetails;