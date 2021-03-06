import React, { Component } from 'react';
import {
  DraggableItem,
  DraggableContainer
} from '@wuweiweiwu/react-shopify-draggable';

import MunicipalityDetailsTable from './MunicipalityDetailsTable';
import MunicipalityDetailsChart from './MunicipalityDetailsChart';

//Report Details page general content
class MunicipalityReport extends Component {
  render() {
    const data = this.props.data;
    const duration = this.props.duration;
    const sale_lease = this.props.sale_lease;
    return (
      <DraggableContainer as="div" type="swappable" className="details-table">
        <div className="details-table">
          <MunicipalityDetailsTable
            classNameChange={this.props.classNameChange}
            color={this.props.color}
            data={data}
            duration={duration}
            sale_lease={sale_lease}
          />
          <MunicipalityDetailsChart
            chartName={this.props.chartNameChange}
            data={data}
            duration={duration}
            sale_lease={sale_lease}
          />
        </div>
      </DraggableContainer>
    );
  }
}
export default MunicipalityReport;
