import React, {Component} from 'react';
import MunicipalityComparisonDetailsTable from './MunicipalityComparisonDetailsTable';
import MunicipalityComparisonDetailsChart from './MunicipalityComparisonDetailsChart';

//Report Details page general content
class MunicipalityComparisonReport extends Component {
  constructor() {
    super();
    this.state = {
      comparisonData: null,
    }
  }

  componentWillMount = () => {
    this.updateData(this.props);
  }

  componentWillReceiveProps = (nextProps) => {
    this.updateData(nextProps);
  }

  updateData = (props) => {
    fetch(`http://localhost:3001/municipalities/${props.comparisonAreacode}?timeframe=${props.duration}&sale_lease=${props.sale_lease}`)
      .then(response => response.json())
      .then(comparisonData => this.setState({ comparisonData }));
  }

  render() {
    const data = this.props.data;
    const duration = this.props.duration;
    const sale_lease = this.props.sale_lease;
    const comparisonAreacode = this.props.comparisonAreacode; 
    const comparisonMunipality = this.props.comparisonMunipality;
    return (
      <div className="details-table">
          <MunicipalityComparisonDetailsTable comparisonData={this.state.comparisonData} classNameChange={this.props.classNameChange} color={this.props.color} data = {data} duration={duration} comparisonAreacode={comparisonAreacode} comparisonMunipality={comparisonMunipality} sale_lease={sale_lease}/>
          <MunicipalityComparisonDetailsChart comparisonData={this.state.comparisonData} chartName={this.props.chartNameChange} classNameChange={this.props.classNameChange} color={this.props.color} data = {data} duration={duration} comparisonAreacode={comparisonAreacode} comparisonMunipality={comparisonMunipality} sale_lease={sale_lease}/>
      </div>
    );
  }
}
export default MunicipalityComparisonReport;