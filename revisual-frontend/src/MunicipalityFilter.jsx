import React, {Component} from 'react';

 
const options = ["Today", "3 months", "2 years"]
class MunicipalityFilter extends Component {
  constructor() {
    super();
    this.state = { 
      sale_lease: 'select',
      duration: 'select'
    };
  }
  onChange(e) {
    this.setState({
      sale_lease: e.target.value
    })
  }

  render() {
    return (
      <div className="filter">
        <div className="form-group">
          <label className="form-label" htmlFor="sale-lease" >Sale/Lease</label>
          <select value={this.state.value} onChange={this.onChange.bind(this)} className="form-control">
            <option value="All">All</option>
            <option value="First">Sale</option>
            <option value="Second">Lease</option>
          </select>
          <label className="form-label" htmlFor="duration" >Duration</label>
          <select value={this.state.value} onChange={this.onChange.bind(this)} className="form-control">
          {options.map(option => {
            return <option value={option} key={option} >{option}</option>
          })}
          </select>
        </div>
      </div>
    );
  }
}
export default MunicipalityFilter;
