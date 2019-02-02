import React, {Component} from 'react';
 // eslint-disable-next-line
import calendar from './images/calendar.png'
import MunicipalityDetailsReportHead from './MunicipalityDetailsReportHead';

// Municipality Search page post click detail summary and link to Municipality Search
class MunicipalityReportHead extends Component {

  render() {
    let data = this.props.data;

    return (
        <div className="report-market-trends" ref={(el) => {
          if (el) {
            el.style.setProperty('background-color', this.props.color, 'important');
          }
        }} >
          <p id="report-name">{data && data.municipality.municipality} {this.props.sale_lease} Market Stats</p>
          <MunicipalityDetailsReportHead data={data}/>
          <p id="report-duration"><span><img className="report-calendar" alt="calendar" src={calendar}/></span> {this.props.duration}</p>
        </div>
    );
  }
}
export default MunicipalityReportHead;