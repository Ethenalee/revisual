import React, {Component} from 'react';
import { Bar } from "react-chartjs-2";


class MunicipalityBriefChart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      barChartOptions: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
              {
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
                beginAtZero: true,
              }
            }
          ]
        }
      }
    };
  }

  label = (data) => {
    if (data && data.monthly_average_sold_price.length === 13) {
      return ["Current Month", "Last Year Same Month"]
    } else if (data && data.monthly_average_sold_price.length === 3) {
      return ["Current Month", "Past 2 month", "Past 3 months"]
    } else if (data && data.monthly_average_sold_price.length === 24){
      return ["Current Month", "Past 2 months", "Past 3 months", "Past 4 months", "Past 5 months", "Past 6 months", "Past 7 months", "Past 8 months", "Past 9 months", "Past 10 months", "Past 11 months", "Past 12 months", "Past 13 months", "Past 14 months", "Past 15 months", "Past 16 months", "Past 17 months", "Past 18 months",  "Past 19 months", "Past 20 months", "Past 21 months", "Past 22 months", "Past 23 months", "Past 24 months"]
    }
  }

  dataarray = (data) => {
    if (data && data.monthly_average_sold_price) {
      return data.monthly_average_sold_price.map(item => ( 
        Math.floor(item)
      ))
    }
  }

  render() {
    let data = this.props.data
    let dataBar = {
      labels: this.label(data),
      datasets: [
        {
          label: "Average price",
          data: this.dataarray(data),
          backgroundColor: "rgba(245, 74, 85, 0.5)",
          borderWidth: 1
        }
      ]
    };
    return (
      <div className="brief-chart">

            <Bar thousandSeparator={true} data={dataBar} options={this.state.barChartOptions} />

      </div>
    );
  }
}
export default MunicipalityBriefChart;