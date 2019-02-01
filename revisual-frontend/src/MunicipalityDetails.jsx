import React, {Component} from 'react';
import MunicipalityDetailsHead from './MunicipalityDetailsHead';
import MunicipalityReport from './MunicipalityReport';

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
        <div className="details">
          <MunicipalityReport data = {data} sale_lease={this.props.location.state.sale_lease}/>
        </div>
      </section>
    );
  }
}
export default MunicipalityDetails;