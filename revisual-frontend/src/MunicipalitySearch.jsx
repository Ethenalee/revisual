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
      sale_lease: "select", 
      duration: "select",
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


  componentWillMount() {
    this.updateData();
  }

  // Ensure that component will update even when changing from one details page
  // to another.
  componentWillReceiveProps(nextProps) {
    this.updateData(nextProps.match.params.id);
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
        <h3>Municipality: {this.state.areacode}, {this.state.municipality}</h3>
        {/* <h6>Raw Data: {JSON.stringify(this.state.data)}</h6> */}
      </section>
    );
  }

  updateData(id = this.props.match.params) {
    // TODO: Soft-code this url
    fetch(`http://localhost:3001/municipalities/${id}`)
      .then(response => response.json())
      // .then(data => this.setState({ data }));
  }
}

export default MunicipalitySearch;
