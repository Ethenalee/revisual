import React, { Component } from 'react';
import MunicipalityMap from './MunicipalityMap';



//Municipality Search page which loads when landing page "Gettings Started" is clicked.
class MunicipalitySearch extends Component {
  constructor() {
    super();

    this.state = {
      areacode: undefined, 
      municipality: undefined, 
      sale_lease: undefined, 
      duration: undefined,
      introactive: true,
      marketactive: false
    };
  }

  toggleIntro = (id, municipality) => {
    this.setState({
      introactive: false,
      marketactive: true,
      areacode: id, 
      municipality: municipality
    });
  }

  saleChange = (sale) => {
    this.setState({
     sale_lease: sale
    });
  }
  durationChange = (duration) => {
    this.setState({
      duration: duration
    });
  }

  render() {
    const data = this.props.data;
    const duration = this.props.duration;
    const sale_lease = this.props.sale_lease;

    return (
      <section className="second-page">
        <div>
          Selected Municipality: 
        </div>
        <br/>
        <div>
          Municipality to compare:
        </div>
        <div className="second-middle">
          <MunicipalityMap data={data} duration={duration} sale_lease={sale_lease} toggleIntro={this.toggleIntro}/>
        </div>
        <div className="compareModalClose"><button onClick={() => this.props.closeInsideModal(this.state.areacode, this.state.municipality)}> Submit Selection </button> </div>
      </section>
    );
  }

}

export default MunicipalitySearch;
