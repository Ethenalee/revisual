import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class MunicipalityBrief extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentWillMount = () => {
    this.updateData(this.props);
  }

  componentWillReceiveProps = (nextProps) => {
    this.updateData(nextProps);
  }

  updateData = (props) => {
    fetch(`http://localhost:3001/municipalities/${props.areacode}?timeframe=${props.duration}&sale_lease=${props.sale_lease}`)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }


  render() {
    var data =JSON.stringify(this.state.data);
    return (
      <div className="brief">
       This is Market trend space
       {this.props.municipality}, {this.props.areacode}, {this.props.duration}, {this.props.sale_lease}
       {data}
       <Link className="button-text"  to ={{
        pathname: `/municipalities/${this.props.areacode}`, 
        state: { 
            data: this.state.data
        }
        }}>
        Get Started!
        </Link>
      </div>
    );
  }
}
export default MunicipalityBrief;