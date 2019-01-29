import React, { Component } from 'react';
import MunicipalityHead from './MunicipalityHead';
import MunicipalityMap from './MunicipalityMap';
import MunicipalityFilter from './MunicipalityFilter';
import MunicipalityIntro from './MunicipalityIntro';
import MunicipalityBrief from './MunicipalityBrief';

class MunicipalityDetails extends Component {
  constructor() {
    super();

    this.state = {
      data: null,
      introactive: true,
      marketactive: false
    };
  }

  toggleIntro = (municipality) => {
    this.setState({
      introactive: false,
      marketactive: true,
      data: municipality
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
            <MunicipalityBrief data={this.state.data}/>
          }
        </div>
        <h3>Municipality: {this.state.data && this.state.data.municipality}</h3>
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

export default MunicipalityDetails;
