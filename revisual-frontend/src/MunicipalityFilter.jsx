import React, {Component} from 'react';

 
class MunicipalityFilter extends Component {

  saleChange = (event) => {
    this.props.saleChange(event.target.value);
  }

  durationChange = (event) => {
    this.props.durationChange(event.target.value);
  }
  
  render() {
    return (
      <div className="filter">
        <div className="form-group">
          <label className="form-label" htmlFor="sale-lease" >Sale/Lease</label>
          <select onChange={this.saleChange} className="form-control">
            <option value="">Select</option>
            <option value="Sale">Sale</option>
            <option value="Lease">Lease</option>
          </select>
          <label className="form-label" htmlFor="duration" >Duration</label>
          <select onChange={this.durationChange} className="form-control">
            <option value="">Select</option>
            <option value="Today">Today</option>
            <option value="3months">3 Months</option>
            <option value="2years">2 Years</option>
          </select>
        </div>
      </div>
    );
  }
}
export default MunicipalityFilter;
