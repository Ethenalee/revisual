import React, {Component} from 'react';


class MunicipalityBriefTable extends Component {
  constructor() {
    super()
    this.state = {
      community : ["","Newtonbrook East, Willowdale East", "High Park, South Parkdale, Swansea, Roncesvalles Village", "Davisville Village, Midtown Toronto, Lawrence Park South"]
    }
  }
  render() {
    let municipality = this.props.data && this.props.data.municipality.id
    let data = this.props.data
    return (
      <div className="brief-table">
        <div className="community">
          <div className="labels"><div>Community</div></div>
          <div className="values"><div>{this.state.community[municipality]}</div></div>
        </div>
        <div className="avg-sold-price">
          <div className="labels"><div>Average Sold Price</div></div>
          <div className="values"><div>{data && (data.average_sold_price).toString().split('.')[0].replace(/(.)(?=(.{3})+$)/g,"$1,")} CAD</div></div>
        </div>
      </div>
    )
  }
}
export default MunicipalityBriefTable;