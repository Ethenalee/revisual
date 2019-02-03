import React, {Component} from 'react';


class MunicipalityComparisonDetailsTable extends Component {
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
      <div>
        <table cellSpacing='10' className="comparisonTable" align="center" >
          <tr className="comparisonTable">
            <th className="comparisonTable" align="center">Type</th>
            <th className="comparisonTable" align="center">Mun 1</th>
            <th className="comparisonTable" align="center">Mun 2</th>
            <th className="comparisonTable" align="center">Comparison</th>
          </tr>
          <tr className="comparisonTable">
            <td className="comparisonTable">X </td>
            <td className="comparisonTable">Alfreds Futterkiste</td>
            <td className="comparisonTable">Maria Anders</td>
            <td className="comparisonTable">Germany</td>
          </tr>
          <tr className="comparisonTable">
            <td className="comparisonTable">X </td>
            <td className="comparisonTable">Centro comercial Moctezuma</td>
            <td className="comparisonTable">Francisco Chang</td>
            <td className="comparisonTable">Mexico</td>
          </tr>
          <tr className="comparisonTable">
            <td className="comparisonTable">X </td>
            <td className="comparisonTable">Ernst Handel</td>
            <td className="comparisonTable">Roland Mendel</td>
            <td className="comparisonTable">Austria</td>
          </tr>
          <tr className="comparisonTable">
            <td className="comparisonTable">X </td>
            <td className="comparisonTable">Island Trading</td>
            <td className="comparisonTable">Helen Bennett</td>
            <td className="comparisonTable">UK</td>
          </tr>
          <tr className="comparisonTable">
            <td className="comparisonTable">X </td>
            <td className="comparisonTable">Laughing Bacchus Winecellars</td>
            <td className="comparisonTable">Yoshi Tannamuri</td>
            <td className="comparisonTable">Canada</td>
          </tr>
          <tr>
            <td className="comparisonTable">X </td>
            <td className="comparisonTable">Magazzini Alimentari Riuniti</td>
            <td className="comparisonTable">Giovanni Rovelli</td>
            <td className="comparisonTable">Italy</td>
          </tr>
        </table>
      </div>
    )
  }
}
export default MunicipalityComparisonDetailsTable;