import React, {Component} from 'react';
import { Bar } from "react-chartjs-2";


class MunicipalityBriefChart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      barChartOptions1: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          callbacks: {
              label: function(tooltipItem) {
                  return Number(tooltipItem.yLabel).toFixed(0).replace(/./g, function(c, i, a) {
                      return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
                  });
              }
          }
        },
        plugins: {
          datalabels: {
             display: true,
             color: 'white',
             rotation: 270,
             formatter: function(value) {
              return "$" + Number(value).toFixed(0).replace(/./g, function(c, i, a) {
                return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
            });
            }
          }
       },
        scales: {
          xAxes: [
              {
                display: true,
                barPercentage: 1,
                gridLines: {
                  display: false,
                  color: "rgba(0, 0, 0, 0.1)"
                }
              }
            ],
          yAxes: [
            {
              display: false,
              gridLines: {
                display: false,
                color: "rgba(0, 0, 0, 0.1)"
              },
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      },
      barChartOptions2: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          callbacks: {
              label: function(tooltipItem) {
                  return Number(tooltipItem.yLabel).toFixed(0).replace(/./g, function(c, i, a) {
                      return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
                  });
              }
          }
        },
        plugins: {
          datalabels: {
             display: true,
             color: 'white',
             rotation: 270,
             formatter: function(value) {
              return Number(value).toFixed(0).replace(/./g, function(c, i, a) {
                return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
            });
            }
          }
       },
        scales: {
          xAxes: [
              {
                display: true,
                barPercentage: 1,
                gridLines: {
                  display: false,
                  color: "rgba(0, 0, 0, 0.1)"
                }
              }
            ],
          yAxes: [
            {
              display: false,
              gridLines: {
                display: false,
                color: "rgba(0, 0, 0, 0.1)"
              },
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    };
  }

  label = (data) => {
    if (data && data.monthly_average_sold_price.length === 13) {
      return ["Feb 2019", "Feb 2018"].reverse()
    } else if (data && data.monthly_average_sold_price.length === 3) {
      return ["Feb 2019", "Jan 2019", "Dec 2018"].reverse()
    } else if (data && data.monthly_average_sold_price.length === 24){
      return ["Feb 2019", "Jan 2019", "Dec 2018", "Nov 2018", "Oct 2018", "Sep 2018", "Aug 2018", "Jul 2018", "Jun 2018", "May 2018", "Apr 2018", "Mar 2018", "Feb 2018", "Jan 2018", "Dec 2017", "Nov 2017", "Oct 2017", "Sep 2017", "Aug 2017", "Jul 2017", "Jun 2017", "May 2017", "Apr 2017", "Mar 2017"].reverse()
    }
  }

  dataArrayPrice = (data) => {
    if (data && data.monthly_average_sold_price) {
      return data.monthly_average_sold_price.reverse().map(item => ( 
        Math.floor(item)
      ))
    }
  }

  dataArrayNumListings = (data) => {
    if (data && data.monthly_number_of_listings) {
      return data.monthly_number_of_listings.reverse().map(item => ( 
        Math.floor(item)
      ))
    }
  }

  render() {
    let data = this.props.data
    let dataBarPrice = {
      labels: this.label(data),
      datasets: [
        {
          label: "Average price",
          data: this.dataArrayPrice(data),
          backgroundColor: "rgba(127, 145, 204, 0.54)"
        }
      ]
    };
    let dataBarNumberofListings = {
      labels: this.label(data),
      datasets: [
        {
          label: "Number of Listings",
          data: this.dataArrayNumListings(data),
          backgroundColor: "rgba(63, 127, 191, 0.66)"
        }
      ]
    };
    return (
      <div className="brief-chart">
        <div className="charts"><Bar width={300} data={dataBarPrice} options={this.state.barChartOptions1} /></div>
        <div className="charts"><Bar width={300} data={dataBarNumberofListings} options={this.state.barChartOptions2} /></div>     
      </div>
    );
  }
}
export default MunicipalityBriefChart;