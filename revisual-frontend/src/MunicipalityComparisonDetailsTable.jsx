import React, { Component } from 'react';


class MunicipalityComparisonDetailsTable extends Component {

  salelease = (data) => {
    if (data === "Sale") {
      return "Sold"
    }
    else if (data === "Lease") {
      return "Leased"
    }
  }

  difference = (data1, data2) => {
    return `${Math.floor(((data1 - data2) / data2) * 100)} %`
  }

  refer = (name) => {
    if (name === "report-labels") {
      return true
    } else if (name === "font") {
      return "font"
    }
    else {
      return ""
    }
  }

  render() {
    return (
      <div className="centreTable">
        <table cellSpacing='10' className="comparisonTable" align="center" >
          <tr className="comparisonTable-head">
            <th ref={(el) => {
              if (el && this.refer(this.props.classNameChange) === true) {
                el.style.setProperty('background-color', this.props.color, 'important');
              } else if (el && this.refer(this.props.classNameChange) === 'font') {
                el.style.setProperty('color', this.props.color, 'important')
              }
            }} >Type</th>
            <th ref={(el) => {
              if (el && this.refer(this.props.classNameChange) === true) {
                el.style.setProperty('background-color', this.props.color, 'important');
              } else if (el && this.refer(this.props.classNameChange) === 'font') {
                el.style.setProperty('color', this.props.color, 'important')
              }
            }} >{this.props.data && this.props.data.municipality.municipality}</th>
            <th ref={(el) => {
              if (el && this.refer(this.props.classNameChange) === true) {
                el.style.setProperty('background-color', this.props.color, 'important');
              } else if (el && this.refer(this.props.classNameChange) === 'font') {
                el.style.setProperty('color', this.props.color, 'important')
              }
            }} >{this.props.comparisonMunipality.toUpperCase()}</th>
            <th ref={(el) => {
              if (el && this.refer(this.props.classNameChange) === true) {
                el.style.setProperty('background-color', this.props.color, 'important');
              } else if (el && this.refer(this.props.classNameChange) === 'font') {
                el.style.setProperty('color', this.props.color, 'important')
              }
            }} >Δ</th>
          </tr>
          <tr>
            <td className="comparisonTable-head" ref={(el) => {
              if (el && this.refer(this.props.classNameChange) === true) {
                el.style.setProperty('background-color', this.props.color, 'important');
              } else if (el && this.refer(this.props.classNameChange) === 'font') {
                el.style.setProperty('color', this.props.color, 'important')
              }
            }} >Average Sold Price</td>
            <td>$ {this.props.data && this.props.data.average_sold_price.toString().split('.')[0].replace(/(.)(?=(.{3})+$)/g, "$1,")} CAD</td>
            <td>$ {this.props.comparisonData && this.props.comparisonData.average_sold_price.toString().split('.')[0].replace(/(.)(?=(.{3})+$)/g, "$1,")} CAD</td>
            <td>{this.difference(this.props.data && this.props.data.average_sold_price, this.props.comparisonData && this.props.comparisonData.average_sold_price)}</td>
          </tr>
          <tr>
            <td className="comparisonTable-head" ref={(el) => {
              if (el && this.refer(this.props.classNameChange) === true) {
                el.style.setProperty('background-color', this.props.color, 'important');
              } else if (el && this.refer(this.props.classNameChange) === 'font') {
                el.style.setProperty('color', this.props.color, 'important')
              }
            }} >Highest Priced Listing</td>
            <td>$ {this.props.data && this.props.data.highest_priced_sale.toString().split('.')[0].replace(/(.)(?=(.{3})+$)/g, "$1,")} CAD</td>
            <td>$ {this.props.comparisonData && this.props.comparisonData.highest_priced_sale.toString().split('.')[0].replace(/(.)(?=(.{3})+$)/g, "$1,")} CAD</td>
            <td>{this.difference(this.props.data && this.props.data.highest_priced_sale, this.props.comparisonData && this.props.comparisonData.highest_priced_sale)}</td>
          </tr>
          <tr>
            <td className="comparisonTable-head" ref={(el) => {
              if (el && this.refer(this.props.classNameChange) === true) {
                el.style.setProperty('background-color', this.props.color, 'important');
              } else if (el && this.refer(this.props.classNameChange) === 'font') {
                el.style.setProperty('color', this.props.color, 'important')
              }
            }} > Lowest Priced Listing</td>
            <td>$ {this.props.data && this.props.data.lowest_priced_sale.toString().split('.')[0].replace(/(.)(?=(.{3})+$)/g, "$1,")} CAD</td>
            <td>$ {this.props.comparisonData && this.props.comparisonData.lowest_priced_sale.toString().split('.')[0].replace(/(.)(?=(.{3})+$)/g, "$1,")} CAD</td>
            <td>{this.difference(this.props.data && this.props.data.lowest_priced_sale, this.props.comparisonData && this.props.comparisonData.lowest_priced_sale)}</td>
          </tr>
          <tr>
            <td className="comparisonTable-head" ref={(el) => {
              if (el && this.refer(this.props.classNameChange) === true) {
                el.style.setProperty('background-color', this.props.color, 'important');
              } else if (el && this.refer(this.props.classNameChange) === 'font') {
                el.style.setProperty('color', this.props.color, 'important')
              }
            }} >Number of Total Listings </td>
            <td>{this.props.data && this.props.data.number_of_listings.toString().split('.')[0].replace(/(.)(?=(.{3})+$)/g, "1,")}</td>
            <td>{this.props.comparisonData && this.props.comparisonData.number_of_listings.toString().split('.')[0].replace(/(.)(?=(.{3})+$)/g, "1,")}</td>
            <td>{this.difference(this.props.data && this.props.data.number_of_listings, this.props.comparisonData && this.props.comparisonData.number_of_listings)}</td>
          </tr>
          <tr>
            <td className="comparisonTable-head" ref={(el) => {
              if (el && this.refer(this.props.classNameChange) === true) {
                el.style.setProperty('background-color', this.props.color, 'important');
              } else if (el && this.refer(this.props.classNameChange) === 'font') {
                el.style.setProperty('color', this.props.color, 'important')
              }
            }} >Number of {this.salelease(this.props.sale_lease)} listings</td>
            <td>{this.props.data && this.props.data.number_of_sold.toString().split('.')[0].replace(/(.)(?=(.{3})+$)/g, "1,")}</td>
            <td>{this.props.comparisonData && this.props.comparisonData.number_of_sold.toString().split('.')[0].replace(/(.)(?=(.{3})+$)/g, "1,")}</td>
            <td>{this.difference(this.props.data && this.props.data.number_of_sold, this.props.comparisonData && this.props.comparisonData.number_of_sold)}</td>
          </tr>
          <tr>
            <td className="comparisonTable-head" ref={(el) => {
              if (el && this.refer(this.props.classNameChange) === true) {
                el.style.setProperty('background-color', this.props.color, 'important');
              } else if (el && this.refer(this.props.classNameChange) === 'font') {
                el.style.setProperty('color', this.props.color, 'important')
              }
            }} > Average days on Market</td>
            <td>{this.props.data && this.props.data.average_days_on_market.toString().split('.')[0].replace(/(.)(?=(.{3})+$)/g, "1,")}</td>
            <td>{this.props.comparisonData && this.props.comparisonData.average_days_on_market.toString().split('.')[0].replace(/(.)(?=(.{3})+$)/g, "1,")}</td>
            <td>{this.difference(this.props.data && this.props.data.average_days_on_market, this.props.comparisonData && this.props.comparisonData.average_days_on_market)}</td>
          </tr>
        </table>
      </div>
    )
  }
}
export default MunicipalityComparisonDetailsTable;
