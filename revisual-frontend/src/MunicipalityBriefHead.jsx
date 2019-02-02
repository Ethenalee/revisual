import React, {Component} from 'react';
 // eslint-disable-next-line
import calendar from './images/calendar.png'


// Municipality Search page post click detail summary and link to Municipality Search
class MunicipalityBriefHead extends Component {

  render() {
    let data = this.props.data;
    const divStyle = {
      color: this.props.colorChange(data && data.municipality.municipality)
    };
    return (
        <div className="market-trends"><p><span style={divStyle} id="name">{data && data.municipality.municipality}</span><span>{this.props.sale_lease} Market Stats</span></p><p id="duration"><span><img className="calendar" src={calendar}/></span> {this.props.durationChange(this.props.duration)}</p></div>
    );
  }
}
export default MunicipalityBriefHead;