import React, {Component} from 'react';
 // eslint-disable-next-line
import calendar from './images/calendar.png'
import MunicipalityDetailsReportHead from './MunicipalityDetailsReportHead';

// Municipality Search page post click detail summary and link to Municipality Search
class MunicipalityReportHead extends Component {

  refer = (name) => {
    if (name === "report-market-trends") {
      return true
    } else if (name === "font") {
      return "font"
    }
     else {
      return false
    }
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

  comparison = (comparison) => {
    if (comparison !== undefined) {
      return `/ ${comparison}`
    } else {
      return ""
    }
  }

  render() {
    let data = this.props.data;

    return (
        <div className="report-market-trends" ref={(el) => {
          if (el && this.refer(this.props.classNameChange) === true) {
            el.style.setProperty('background-color', this.props.color, 'important');
          }
        }} >
          <p id="report-name" ref={(el) => {
          if (el && this.refer(this.props.classNameChange) === 'font') {
            el.style.setProperty('color', this.props.color, 'important')
          }
        }} >{data && data.municipality.municipality} {this.comparison(this.props.comparisonMunipality).toUpperCase()} {this.props.sale_lease} Market Stats</p>
          <MunicipalityDetailsReportHead data={data}/>
          <p id="report-duration" ref={(el) => {
          if (el && this.refer(this.props.classNameChange) === 'font') {
            el.style.setProperty('color', this.props.color, 'important')
          }
        }}><span><img className="report-calendar" alt="calendar" src={calendar}/></span> {this.durationChange(this.props.duration)}</p>
        </div>
    );
  }
}
export default MunicipalityReportHead;