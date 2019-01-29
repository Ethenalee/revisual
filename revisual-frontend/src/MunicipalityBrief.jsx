import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class MunicipalityBrief extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  // componentDidMount() {
  //   fetch()
  //     .then(response => response.json())
  //     .then(data => this.setState({ data }));
  // }

  componentWillMount() {
    this.updateData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.updateData(nextProps);
  }

  updateData(props) {
    fetch(`http://localhost:3001/municipalities/${props.areacode}?timeframe=${props.duration}&sale_lease=${props.sale_lease}`)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }


  render() {
    return (
      <div className="brief">
       This is Market trend space
       {this.props.municipality}, {this.props.areacode}, {this.props.duration}, {this.props.sale_lease}
       {JSON.stringify(this.state.data)}
       <Link className="button-text" to={`/municipalities/${this.props.areacode}`}>Get Started!</Link>
      </div>
    );
  }
}
export default MunicipalityBrief;