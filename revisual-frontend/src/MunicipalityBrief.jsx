import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Municipality Search page post click detail summary and link to Municipality Search
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
    const data =JSON.stringify(this.state.data);
    const duration = this.props.duration;
    const sale_lease = this.props.sale_lease;
    return (
      <div className="brief">
       This is Market trend space
       {this.props.municipality}, {this.props.areacode}, {this.props.duration}, {this.props.sale_lease}
       {data}
       <Link className="button-text"  to ={{
          pathname: `/municipalities/${this.props.areacode}`, 
          state: { 
            data: this.state.data,
            duration: duration,
            sale_lease: sale_lease,
          }
        }}>
        Get Started!
        </Link>
      </div>
    );
  }
}
export default MunicipalityBrief;