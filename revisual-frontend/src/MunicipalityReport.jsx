import React, { Component } from 'react';
import {
  DraggableItem,
  DraggableContainer
} from '@wuweiweiwu/react-shopify-draggable';

import MunicipalityDetailsTable from './MunicipalityDetailsTable';
import MunicipalityDetailsChart from './MunicipalityDetailsChart';

//Report Details page general content
class MunicipalityReport extends Component {
  constructor() {
    super();
  }

  render() {
    const data = this.props.data;
    const duration = this.props.duration;
    const sale_lease = this.props.sale_lease;
    return (
      <DraggableContainer as="div" type="swappable" className="details-table">
        <DraggableItem as="div" className="swappable-block">
          <MunicipalityDetailsTable
            data={data}
            duration={duration}
            sale_lease={sale_lease}
          />
        </DraggableItem>

        <MunicipalityDetailsChart
          data={data}
          duration={duration}
          sale_lease={sale_lease}
        />
      </DraggableContainer>
    );
  }
}
export default MunicipalityReport;
