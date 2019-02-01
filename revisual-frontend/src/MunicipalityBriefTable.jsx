import React, {Component} from 'react';


class MunicipalityBriefTable extends Component {
  constructor() {
    super()
    this.state = {
      community : ["","Newtonbrook East, Willowdale East", "High Park, South Parkdale, Swansea, Roncesvalles Village", "Davisville Village, Midtown Toronto, Lawrence Park South"]
    }
  }

  salelease = (data) => {
    if (data === "Sale") {
      return "Sold"
    }
    else if (data === "Lease") {
      return "Leased"
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
          <div className="labels"><div>Average {this.salelease(this.props.sale_lease)} Price</div></div>
          <div className="values"><div>{data && (data.average_sold_price).toString().split('.')[0].replace(/(.)(?=(.{3})+$)/g,"$1,")} CAD</div></div>
        </div>
        <div className="highest-price">
          <div className="labels"><div>Highest priced listing</div></div>
          <div className="values"><div>{data && (data.highest_priced_sale).toString().split('.')[0].replace(/(.)(?=(.{3})+$)/g,"$1,")} CAD</div></div>
        </div>
        <div className="lowest-price">
          <div className="labels"><div>Lowest priced listing</div></div>
          <div className="values"><div>{data && (data.lowest_priced_sale).toString().split('.')[0].replace(/(.)(?=(.{3})+$)/g,"$1,")} CAD</div></div>
        </div>
        <div className="num-days">
          <div className="labels"><div>Average days on Market</div></div>
          <div className="values"><div>{data && (data.average_days_on_market.toString().split('.')[0])} Days</div></div>
        </div>
        <div className="num-listings">
          <div className="labels"><div>Number of listings</div></div>
          <div className="values"><div>{data && (data.number_of_listings).toString().split('.')[0].replace(/(.)(?=(.{3})+$)/g,"1,")}</div></div>
        </div>
        <div className="num-sold">
          <div className="labels"><div>Number of {this.salelease(this.props.sale_lease)} listings</div></div>
          <div className="values"><div>{data && (data.number_of_sold.toString().split('.')[0])}</div></div>
        </div>
      </div>
    )
  }
}
export default MunicipalityBriefTable;