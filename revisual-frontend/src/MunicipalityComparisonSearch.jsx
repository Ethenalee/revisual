import React, { Component } from 'react';
import MunicipalityComparisonMap from './MunicipalityComparisonMap';



//Municipality Search page which loads when landing page "Gettings Started" is clicked.
class MunicipalityComparisonSearch extends Component {
  constructor() {
    super();

    this.state = {
      areacode: undefined, 
      municipality: undefined, 
      sale_lease: undefined, 
      duration: undefined,
    };
  }

  munSelect = (id, municipality) => {
    this.setState({
      areacode: id, 
      municipality: municipality
    }, () => {console.log("munSelect: ", this.state.areacode, this.state.municipality)});
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
    const data = this.props.data01;
    const duration = this.props.duration;
    const sale_lease = this.props.sale_lease;

    console.log(this.state.municipality !== undefined && (this.state.municipality.toUpperCase() !== data[0].municipality))

    return (
      <section className="second-page">
        <div>
          Selected Municipality: {data[0].municipality}
        </div>
        <div>
          Municipality to compare: {this.state.municipality ? (this.state.municipality).toUpperCase() : ""}
        </div>
        <div className="second-middle">
          <MunicipalityComparisonMap data={data} duration={duration} sale_lease={sale_lease} munSelect={this.munSelect}/>
        </div>
        <div className="compareModalClose">
          <button className="modal-button-2" onClick={
            () => this.state.municipality !== undefined && (this.state.municipality.toUpperCase() !== data[0].municipality) ? 
            (this.props.closeInsideModal(this.state.areacode, this.state.municipality)) : alert("Can't be empty or Matching")
          }> 
            Submit Selection 
          </button> 
        </div>
      </section>
    );
  }

}

export default MunicipalityComparisonSearch;
