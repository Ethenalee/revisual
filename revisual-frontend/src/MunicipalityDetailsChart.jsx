import React, {Component} from 'react';
import { Bar } from "react-chartjs-2";
import 'chartjs-plugin-datalabels';


class MunicipalityDetailsChart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      barChartOptions1: {
        responsive: true,
        maintainAspectRatio: true,
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
              display: true,
              gridLines: {
                display: false,
                color: "rgba(0, 0, 0, 0.1)"
              },
              ticks: {
                beginAtZero: true,
                callback: function(value) {
                  return "$" + Number(value).toFixed(0).replace(/./g, function(c, i, a) {
                    return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
                  });
                }
              }
            }
          ]
        }
      },
    barChartOptions2: {
      responsive: true,
      maintainAspectRatio: true,
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
            display: true,
            gridLines: {
              display: false,
              color: "rgba(0, 0, 0, 0.1)"
            },
            ticks: {
              beginAtZero: true
            },
          }
        ]
      }
    },
  barChartOptions3: {
    responsive: true,
    maintainAspectRatio: true,
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
         display: 'true',
         color: 'white',
         rotation: 270,
         formatter: function(value) {
          return value + " Days";
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
          display: true,
          gridLines: {
            display: false,
            color: "rgba(0, 0, 0, 0.1)"
          },
          ticks: {
            beginAtZero: true
          },
        }
      ]
    }
  }
  };
  }

  label = (data) => {
    if (data && data.monthly_average_sold_price.length === 13) {
      return ["Current Month", "Last Year Same Month"].reverse()
    } else if (data && data.monthly_average_sold_price.length === 3) {
      return ["Current Month", "Past 2 month", "Past 3 months"].reverse()
    } else if (data && data.monthly_average_sold_price.length === 24){
      return ["Current Month", "Past 2 months", "Past 3 months", "Past 4 months", "Past 5 months", "Past 6 months", "Past 7 months", "Past 8 months", "Past 9 months", "Past 10 months", "Past 11 months", "Past 12 months", "Past 13 months", "Past 14 months", "Past 15 months", "Past 16 months", "Past 17 months", "Past 18 months",  "Past 19 months", "Past 20 months", "Past 21 months", "Past 22 months", "Past 23 months", "Past 24 months"].reverse()
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

  dataArrayNumListings = (data) => {
    if (data && data.monthly_number_of_sold) {
      return data.monthly_number_of_sold.reverse();
    }
  }

  dataDaysOnMarket = (data) => {
    if (data && data.monthly_average_days_on_market) {
      return data.monthly_average_days_on_market.reverse().map(item => ( 
        Math.floor(item)
      ))
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
    let data = this.props.data
    let sale_lease = this.props.sale_lease
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
    let dataBarNumberofSoldListings = {
      labels: this.label(data),
      datasets: [
        {
          label:  `Number of ${this.salelease(sale_lease)} Listings`,
          data: this.dataArrayNumListings(data),
          backgroundColor: "rgba(179, 103, 207, 0.42)"
        }
      ]
    };
    let dataBarDaysOnMarket = {
      labels: this.label(data),
      datasets: [
        {
          label:  "Days on Market",
          data: this.dataArrayNumListings(data),
          backgroundColor: "rgba(169, 173, 192, 0.49)"
        }
      ]
    };
    return (
      <div className="detail-chart">
        <div><Bar width={400} height={200} data={dataBarPrice} options={this.state.barChartOptions1} /></div>
        <div><Bar width={400} height={200} data={dataBarNumberofListings} options={this.state.barChartOptions2} /></div>
        <div><Bar width={400} height={200} data={dataBarNumberofSoldListings} options={this.state.barChartOptions2} /></div>
        <div><Bar width={400} height={200} data={dataBarDaysOnMarket} options={this.state.barChartOptions3} /></div>   
      </div>
    );
  }
}
export default MunicipalityDetailsChart;