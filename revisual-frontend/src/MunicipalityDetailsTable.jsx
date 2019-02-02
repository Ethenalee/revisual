import React, {Component} from 'react';


class MunicipalityDetailsTable extends Component {
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

  refer = (name) => {
    if (name === "report-labels") {
      return true
    } else if(name === "font") {
      return "font"
    }
     else {
      return ""
    }
  }

  render() {
    let municipality = this.props.data && this.props.data.municipality.id
    let data = this.props.data
    return (
      <div className="report-table">
        <div className="report-community">
          <div className="report-labels" ref={(el) => {
          if (el && this.refer(this.props.classNameChange) === true) {
            el.style.setProperty('background-color', this.props.color, 'important');
          } else if (el && this.refer(this.props.classNameChange) === 'font') {
            el.style.setProperty('color', this.props.color, 'important')
          }}
        }>Community</div>
          <div className="report-values"><div>{this.state.community[municipality]}</div></div>
        </div>
        <div className="report-avg-sold-price">
          <div className="report-labels" ref={(el) => {
          if (el && this.refer(this.props.classNameChange) === true) {
            el.style.setProperty('background-color', this.props.color, 'important');
          } else if (el && this.refer(this.props.classNameChange) === 'font') {
            el.style.setProperty('color', this.props.color, 'important')
          }
        }}>Average {this.salelease(this.props.sale_lease)} Price</div>
          <div className="report-values"><div>$ {data && (data.average_sold_price).toString().split('.')[0].replace(/(.)(?=(.{3})+$)/g,"$1,")} CAD</div></div>
        </div>
        <div className="report-highest-price">
          <div className="report-labels" ref={(el) => {
          if (el && this.refer(this.props.classNameChange) === true) {
            el.style.setProperty('background-color', this.props.color, 'important');
          } else if (el && this.refer(this.props.classNameChange) === 'font') {
            el.style.setProperty('color', this.props.color, 'important')
          }
        }}>Highest priced listing</div>
          <div className="report-values"><div>$ {data && (data.highest_priced_sale).toString().split('.')[0].replace(/(.)(?=(.{3})+$)/g,"$1,")} CAD</div></div>
        </div>
        <div className="report-lowest-price">
          <div className="report-labels" ref={(el) => {
          if (el && this.refer(this.props.classNameChange) === true) {
            el.style.setProperty('background-color', this.props.color, 'important');
          } else if (el && this.refer(this.props.classNameChange) === 'font') {
            el.style.setProperty('color', this.props.color, 'important')
          }
        }}>Lowest priced listing</div>
          <div className="report-values"><div>$ {data && (data.lowest_priced_sale).toString().split('.')[0].replace(/(.)(?=(.{3})+$)/g,"$1,")} CAD</div></div>
        </div>
        <div className="report-num-listings">
          <div className="report-labels" ref={(el) => {
          if (el && this.refer(this.props.classNameChange) === true) {
            el.style.setProperty('background-color', this.props.color, 'important');
          } else if (el && this.refer(this.props.classNameChange) === 'font') {
            el.style.setProperty('color', this.props.color, 'important')
          }
        }}>Number of listings</div>
          <div className="report-values"><div>{data && (data.number_of_listings).toString().split('.')[0].replace(/(.)(?=(.{3})+$)/g,"1,")}</div></div>
        </div>
        <div className="report-num-sold">
          <div className="report-labels" ref={(el) => {
          if (el && this.refer(this.props.classNameChange) === true) {
            el.style.setProperty('background-color', this.props.color, 'important');
          } else if (el && this.refer(this.props.classNameChange) === 'font') {
            el.style.setProperty('color', this.props.color, 'important')
          }
        }}>Number of {this.salelease(this.props.sale_lease)} listings</div>
          <div className="report-values"><div>{data && (data.number_of_sold.toString().split('.')[0])}</div></div>
        </div>
        <div className="report-num-days">
          <div className="report-labels" ref={(el) => {
          if (el && this.refer(this.props.classNameChange) === true) {
            el.style.setProperty('background-color', this.props.color, 'important');
          } else if (el && this.refer(this.props.classNameChange) === 'font') {
            el.style.setProperty('color', this.props.color, 'important')
          }
        }}>Average days on Market</div>
          <div className="report-values"><div>{data && (data.average_days_on_market.toString().split('.')[0])} Days</div></div>
        </div>
      </div>
    )
  }
}
export default MunicipalityDetailsTable;