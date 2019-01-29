import React, {Component} from 'react';


class MunicipalityBrief extends Component {

  render() {
    return (
      <div className="brief">
       This is Market trend space
       {this.props.data}
      </div>
    );
  }
}
export default MunicipalityBrief;