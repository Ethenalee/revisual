import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class MunicipalityDetails extends Component {
  constructor() {
    super();

    this.state = {
      id: null,
      data: null
    };
  }

  componentDidMount() {
    this.setState({ id: this.props.match.params.id });

    // TODO: Soft-code this url
    fetch(`http://localhost:3001/municipalities/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
      <div>
        <h3>ID: {this.state.id}</h3>
        <h3>Municipality: {this.state.data && this.state.data.municipality}</h3>
        <h6>Raw Data: {JSON.stringify(this.state.data)}</h6>
      </div>
    );
  }
}

export default MunicipalityDetails;
