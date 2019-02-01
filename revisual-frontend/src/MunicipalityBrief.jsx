import React, {Component} from 'react';
 // eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MunicipalityBriefChart from './MunicipalityBriefChart';
import MunicipalityBriefTable from './MunicipalityBriefTable';
import calendar from './images/calendar.png'


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
  
  duration= (duration) => {
    if (duration === "1month") {
      return "current month"
    } else if (duration === "3months") {
      return "previous 3 months"
    } else {
      return "previous 2 years"
    }
  }
  color = (municipality) => {
    if (municipality === "C01") {
      return "#0B4483"
    } else if (municipality === "W01") {
      return "#1BC9BB"
    } else {
      return "#4C59D0"
    }
  }



  render() {
    let data = this.state.data;
    const divStyle = {
      backgroundColor: this.color(data && data.municipality.municipality)
    };
    return (
      <div className="brief">
        <div className="market-trends"><p style={divStyle} id="name">{data && data.municipality.municipality} {this.props.sale_lease} Market Stats</p><p id="duration"><span><img className="calendar" src={calendar}/></span> {this.duration(this.props.duration)}</p></div>
        <MunicipalityBriefTable data={this.state.data} sale_lease={this.props.sale_lease}/>
        <MunicipalityBriefChart data={this.state.data}/>
        <Link className="go-to-detail"  to ={{
          pathname: `/municipalities/${this.props.areacode}`, 
          state: { 
              data: this.state.data,
              sale_lease: this.props.sale_lease
          }
          }}>
          Generate Report
        </Link>
        </div>
    );
  }
}
export default MunicipalityBrief;