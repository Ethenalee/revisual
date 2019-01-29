import React, { Component } from 'react';
import MunicipalityHead from './MunicipalityHead.jsx';
import MunicipalityMap from './MunicipalityMap.jsx';
import MunicipalityFilter from './MunicipalityFilter';

class MunicipalityDetails extends Component {
  constructor() {
    super();

    this.state = {
      data: null
    };
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
        <MunicipalityMap/>
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
