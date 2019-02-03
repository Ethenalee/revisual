import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import { DraggableItem } from '@wuweiweiwu/react-shopify-draggable';

class MunicipalityDetailsChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      barChartOptions1: {
        responsive: false,
        maintainAspectRatio: true,
        tooltips: {
          callbacks: {
            label: function(tooltipItem) {
              return Number(tooltipItem.yLabel)
                .toFixed(0)
                .replace(/./g, function(c, i, a) {
                  return i > 0 && c !== '.' && (a.length - i) % 3 === 0
                    ? ',' + c
                    : c;
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
              return (
                '$' +
                Number(value)
                  .toFixed(0)
                  .replace(/./g, function(c, i, a) {
                    return i > 0 && c !== '.' && (a.length - i) % 3 === 0
                      ? ',' + c
                      : c;
                  })
              );
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
                color: 'rgba(0, 0, 0, 0.1)'
              }
            }
          ],
          yAxes: [
            {
              display: true,
              gridLines: {
                display: false,
                color: 'rgba(0, 0, 0, 0.1)'
              },
              ticks: {
                beginAtZero: true,
                callback: function(value) {
                  return (
                    '$' +
                    Number(value)
                      .toFixed(0)
                      .replace(/./g, function(c, i, a) {
                        return i > 0 && c !== '.' && (a.length - i) % 3 === 0
                          ? ',' + c
                          : c;
                      })
                  );
                }
              }
            }
          ]
        }
      },
      barChartOptions2: {
        responsive: false,
        maintainAspectRatio: true,
        tooltips: {
          callbacks: {
            label: function(tooltipItem) {
              return Number(tooltipItem.yLabel)
                .toFixed(0)
                .replace(/./g, function(c, i, a) {
                  return i > 0 && c !== '.' && (a.length - i) % 3 === 0
                    ? ',' + c
                    : c;
                });
            }
          }
        },
        plugins: {
          datalabels: {
            display: true,
            color: 'white',
            formatter: function(value) {
              return Number(value)
                .toFixed(0)
                .replace(/./g, function(c, i, a) {
                  return i > 0 && c !== '.' && (a.length - i) % 3 === 0
                    ? ',' + c
                    : c;
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
                color: 'rgba(0, 0, 0, 0.1)'
              }
            }
          ],
          yAxes: [
            {
              display: true,
              gridLines: {
                display: false,
                color: 'rgba(0, 0, 0, 0.1)'
              },
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      },
      barChartOptions3: {
        responsive: false,
        maintainAspectRatio: true,
        tooltips: {
          callbacks: {
            label: function(tooltipItem) {
              return Number(tooltipItem.yLabel)
                .toFixed(0)
                .replace(/./g, function(c, i, a) {
                  return i > 0 && c !== '.' && (a.length - i) % 3 === 0
                    ? ',' + c
                    : c;
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
              return value + ' Days';
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
                color: 'rgba(0, 0, 0, 0.1)'
              }
            }
          ],
          yAxes: [
            {
              display: true,
              gridLines: {
                display: false,
                color: 'rgba(0, 0, 0, 0.1)'
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

  label = data => {
    if (data && data.monthly_average_sold_price.length === 13) {
      return ['Feb 2019', 'Feb 2018'].reverse();
    } else if (data && data.monthly_average_sold_price.length === 3) {
      return ['Feb 2019', 'Jan 2019', 'Dec 2018'].reverse();
    } else if (data && data.monthly_average_sold_price.length === 24) {
      return [
        'Feb 2019',
        'Jan 2019',
        'Dec 2018',
        'Nov 2018',
        'Oct 2018',
        'Sep 2018',
        'Aug 2018',
        'Jul 2018',
        'Jun 2018',
        'May 2018',
        'Apr 2018',
        'Mar 2018',
        'Feb 2018',
        'Jan 2018',
        'Dec 2017',
        'Nov 2017',
        'Oct 2017',
        'Sep 2017',
        'Aug 2017',
        'Jul 2017',
        'Jun 2017',
        'May 2017',
        'Apr 2017',
        'Mar 2017'
      ].reverse();
    }
  };

  dataArrayPrices = data => {
    if (data && data.monthly_average_sold_price) {
      return (
        data &&
        data.monthly_average_sold_price.reverse().map(item => Math.floor(item))
      );
    }
  };

  dataArrayNumListings = data => {
    if (data && data.monthly_number_of_listings) {
      return (
        data &&
        data.monthly_number_of_listings.reverse().map(item => Math.floor(item))
      );
    }
  };

  dataArrayNumSoldListings = data => {
    if (data && data.monthly_number_of_sold) {
      return data && data.monthly_number_of_sold.reverse();
    }
  };

  dataDaysOnMarket = data => {
    if (data && data.monthly_average_days_on_market) {
      return (
        data &&
        data.monthly_average_days_on_market
          .reverse()
          .map(item => Math.floor(item))
      );
    }
  };

  salelease = data => {
    if (data === 'Sale') {
      return 'Sold';
    } else if (data === 'Lease') {
      return 'Leased';
    }
  };

  colorScheme = () => {
    const first = [
      'rgba(127, 145, 204, 0.54)',
      'rgba(63, 127, 191, 0.66)',
      'rgba(179, 103, 207, 0.42)',
      'rgba(169, 173, 192, 0.49)'
    ];
    const second = [
      'rgba(12, 145, 204, 0.54)',
      'rgba(6, 127, 191, 0.66)',
      'rgba(17, 103, 207, 0.42)',
      'rgba(16, 173, 192, 0.49)'
    ];
    const third = [
      'rgba(133, 145, 204, 0.54)',
      'rgba(411, 127, 191, 0.66)',
      'rgba(333, 103, 207, 0.42)',
      'rgba(933, 173, 192, 0.49)'
    ];
    const forth = [
      'rgba(243, 239, 185, 0.87)',
      'rgba(46, 414, 191, 0.66)',
      'rgba(20, 204, 152, 0.87)',
      'rgba(177, 204, 197, 0.87)'
    ];

    if (this.props.chartName === 'set-one') {
      return second;
    } else if (this.props.chartName === 'set-two') {
      return third;
    } else if (this.props.chartName === 'set-three') {
      return forth;
    } else {
      return first;
    }
  };

  render() {
    let data = this.props.data;
    let sale_lease = this.props.sale_lease;

    let dataBarPrices = {
      labels: this.label(data),
      datasets: [
        {
          label: 'Average price',
          data: this.dataArrayPrices(data) && this.dataArrayPrices(data),
          backgroundColor: this.colorScheme()[0]
        }
      ]
    };

    let dataBarNumberofListings = {
      labels: this.label(data),
      datasets: [
        {
          label: 'Number of Listings',
          data:
            this.dataArrayNumListings(data) && this.dataArrayNumListings(data),
          backgroundColor: this.colorScheme()[1]
        }
      ]
    };
    let dataBarNumberofSoldListings = {
      labels: this.label(data),
      datasets: [
        {
          label: `Number of ${this.salelease(sale_lease)} Listings`,
          data:
            this.dataArrayNumSoldListings(data) &&
            this.dataArrayNumSoldListings(data),
          backgroundColor: this.colorScheme()[2]
        }
      ]
    };
    let dataBarDaysOnMarket = {
      labels: this.label(data),
      datasets: [
        {
          label: 'Days on Market',
          data: this.dataDaysOnMarket(data) && this.dataDaysOnMarket(data),
          backgroundColor: this.colorScheme()[3]
        }
      ]
    };
    return (
      <div className="detail-chart">
        <DraggableItem as="div" className="swappable-block">
          <div className="report-charts">
            <Bar
              width={300}
              height={200}
              data={dataBarPrices}
              options={this.state.barChartOptions1}
            />
          </div>
        </DraggableItem>
        <DraggableItem as="div" className="swappable-block">
          <div className="report-charts">
            <Bar
              width={300}
              height={200}
              data={dataBarNumberofListings}
              options={this.state.barChartOptions2}
            />
          </div>
        </DraggableItem>
        <DraggableItem as="div" className="swappable-block">
          <div className="report-charts">
            <Bar
              width={300}
              height={200}
              data={dataBarNumberofSoldListings}
              options={this.state.barChartOptions2}
            />
          </div>
        </DraggableItem>
        <DraggableItem as="div" className="swappable-block">
          <div className="report-charts">
            <Bar
              width={300}
              height={200}
              data={dataBarDaysOnMarket}
              options={this.state.barChartOptions3}
            />
          </div>{' '}
        </DraggableItem>
      </div>
    );
  }
}
export default MunicipalityDetailsChart;
