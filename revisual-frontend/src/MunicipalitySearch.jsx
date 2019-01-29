import React, { Component } from 'react';
import MunicipalityHead from './MunicipalityHead';
import MunicipalityMap from './MunicipalityMap';
import MunicipalityFilter from './MunicipalityFilter';
import MunicipalityIntro from './MunicipalityIntro';
import MunicipalityBrief from './MunicipalityBrief';

class MunicipalitySearch extends Component {
  constructor() {
    super();

    this.state = {
      areacode: "", 
      municipality: "", 
      sale_lease: "", 
      duration: "",
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
    return (
      <section className="second-page">
        <MunicipalityHead/>
        <MunicipalityFilter saleChange={this.saleChange} durationChange={this.durationChange}/>
        <div className="second-middle">
          <MunicipalityMap toggleIntro={this.toggleIntro}/>
          {this.state.introactive &&
            <MunicipalityIntro/>
          }
          {this.state.marketactive &&
            <MunicipalityBrief areacode={this.state.areacode} municipality={this.state.municipality} sale_lease={this.state.sale_lease} duration={this.state.duration}/>
          }
        </div>
      </section>
    );
  }

}

export default MunicipalitySearch;
