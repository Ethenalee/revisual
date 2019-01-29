import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class MunicipalityBrief extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('https://')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
      <div className="brief">
       This is Market trend space
       {this.props.municipality}, {this.props.areacode}, {this.props.duration}, {this.props.sale_lease}
       <Link className="button-text" to={`/municipalities/${this.props.areacode}`}>Get Started!</Link>
      </div>
    );
  }
}
export default MunicipalityBrief;