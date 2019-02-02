import React, {Component} from 'react';
 // eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MunicipalityBriefChart from './MunicipalityBriefChart';
import MunicipalityBriefTable from './MunicipalityBriefTable';
import MunicipalityBriefHead from './MunicipalityBriefHead';

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
  
  durationChange = (duration) => {
    if (duration === "1month") {
      return "current month"
    } else if (duration === "3months") {
      return "previous 3 months"
    } else {
      return "previous 2 years"
    }
  }
  colorChange = (municipality) => {
    if (municipality === "C01") {
      return "#0B4483"
    } else if (municipality === "W01") {
      return "#1BC9BB"
    } else {
      return "#4C59D0"
    }
  }

  render() {
    return (
      <div className="brief">
        <MunicipalityBriefHead data={this.state.data} sale_lease={this.props.sale_lease} duration={this.props.duration} colorChange={this.colorChange} durationChange={this.durationChange}></MunicipalityBriefHead>
        <MunicipalityBriefTable data={this.state.data} sale_lease={this.props.sale_lease}/>
        <MunicipalityBriefChart data={this.state.data}/>
        <Link className="go-to-detail"  to ={{
          pathname: `/municipalities/${this.props.areacode}`, 
          state: { 
              data: this.state.data,
              sale_lease: this.props.sale_lease,
              duration: this.props.duration
          }
          }}>
          Generate Report
        </Link>
        </div>
    );
  }
}
export default MunicipalityBrief;