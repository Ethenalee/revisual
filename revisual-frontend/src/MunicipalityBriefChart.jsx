import React, {Component} from 'react';
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";



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
                  display: true,
                  color: "rgba(0, 0, 0, 0.1)"
                }
              }
            ],
          yAxes: [
            {
              gridLines: {
                display: true,
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

  

  render() {
    let dataBar = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "#1",
          data: [12, 39, 3, 50, 2, 32, 84],
          backgroundColor: "rgba(245, 74, 85, 0.5)",
          borderWidth: 1
        },
        {
          label: "#2",
          data: [56, 24, 5, 16, 45, 24, 8],
          backgroundColor: "rgba(90, 173, 246, 0.5)",
          borderWidth: 1
        },
        {
          label: "#3",
          data: [12, 25, 54, 3, 15, 44, 3],
          backgroundColor: "rgba(245, 192, 50, 0.5)",
          borderWidth: 1
        }
      ]
    };
    return (
      <div className="brief-chart">
          <MDBContainer>
            <h3 className="mt-5">Radar chart</h3>
            <Bar data={dataBar} options={this.state.barChartOptions} />
          </MDBContainer>
      </div>
    );
  }
}
export default MunicipalityBriefChart;