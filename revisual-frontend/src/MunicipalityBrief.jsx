import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class MunicipalityBrief extends Component {

  render() {
    return (
      <div className="brief">
       This is Market trend space
       {this.props.municipality}, {this.props.areacode}
       <Link className="button-text" to={`/municipalities/${this.props.areacode}`}>Get Started!</Link>
      </div>
    );
  }
}
export default MunicipalityBrief;