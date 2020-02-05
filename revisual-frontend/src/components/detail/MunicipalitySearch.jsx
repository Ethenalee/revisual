import React, { Component } from 'react';
import MunicipalityHead from './MunicipalityHead';
import MunicipalityMap from './MunicipalityMap';
import MunicipalityFilter from './MunicipalityFilter';
import MunicipalityIntro from './MunicipalityIntro';
import MunicipalityBrief from '../brief/MunicipalityBrief';

//Municipality Search page which loads when landing page "Gettings Started" is clicked.
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
     sale_lease: sale,
     duration: this.state.duration,
     areacode: this.state.areacode,
     municipality: this.state.municipality
    });
  }
  durationChange = (duration) => {
    this.setState({
      sale_lease: this.state.sale_lease,
      duration: duration,
      areacode: this.state.areacode,
      municipality: this.state.municipality
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
            <MunicipalityIntro sale_lease={this.state.sale_lease} duration={this.state.duration}/>
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
