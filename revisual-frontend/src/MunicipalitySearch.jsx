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
      data: {areacode: "", municipality: ""},
      introactive: true,
      marketactive: false
    };
  }

  toggleIntro = (id, municipality) => {
    this.setState({
      introactive: false,
      marketactive: true,
      data: {areacode: id, municipality: municipality}
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
        <MunicipalityFilter/>
        <div className="second-middle">
          <MunicipalityMap toggleIntro={this.toggleIntro}/>
          {this.state.introactive &&
            <MunicipalityIntro/>
          }
          {this.state.marketactive &&
            <MunicipalityBrief areacode={this.state.data.areacode} municipality={this.state.data.municipality}/>
          }
        </div>
        <h3>Municipality: {this.state.data.areacode}, {this.state.data.municipality}</h3>
        <h6>Raw Data: {JSON.stringify(this.state.data)}</h6>
      </section>
    );
  }

  updateData(id = this.props.match.params) {
    // TODO: Soft-code this url
    fetch(`http://localhost:3001/municipalities/${id}`)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
}

export default MunicipalitySearch;
