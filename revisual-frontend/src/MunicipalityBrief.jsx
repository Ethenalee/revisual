import React, {Component} from 'react';
 // eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MunicipalityBriefChart from './MunicipalityBriefChart';
import MunicipalityBriefTable from './MunicipalityBriefTable';

// Municipality Search page post click detail summary and link to Municipality Search
class MunicipalityBrief extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    }
  }

  componentWillMount = () => {
    this.updateData(this.props);
  }

  componentWillReceiveProps = (nextProps) => {
    this.updateData(nextProps);
  }

  updateData = (props) => {
    fetch(`http://localhost:3001/municipalities/${props.areacode}?timeframe=${props.duration}&sale_lease=${props.sale_lease}`)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }


  render() {
    let data = this.state.data;
    return (
      <div className="brief">
        <div className="market-trends">{data && data.municipality.municipality} Market Trends</div>
        <MunicipalityBriefTable data={this.state.data} sale_lease={this.props.sale_lease}/>
        <MunicipalityBriefChart data={this.state.data}/>
        <Link className="go-to-detail"  to ={{
          pathname: `/municipalities/${this.props.areacode}`, 
          state: { 
              data: this.state.data
          }
          }}>
          Generate Report
        </Link>
      </div>
    );
  }
}
export default MunicipalityBrief;