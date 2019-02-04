import React, { Component } from 'react';
import Modal from 'react-modal';

import MunicipalityDetailsHead from './MunicipalityDetailsHead';
import MunicipalityReport from './MunicipalityReport';
import MunicipalityDetailsReportSummary from './MunicipalityDetailsReportSummary';
import MunicipalityDetailsFooter from './MunicipalityDetailsFooter';
import MunicipalityReportHead from './MunicipalityReportHead';
import MunicipalityDetailsFilter from './MunicipalityDetailsFilter';
import MunicipalityComparisonSearch from './MunicipalityComparisonSearch';
import MunicipalityComparisonReport from './MunicipalityComparisonReport';

//Report Details page general content
class MunicipalityDetails extends Component {
  constructor() {
    super();
    this.state = {
      color: 'rgb(52, 67, 141)',
      classNameChange: 'None',
      chartNameChange: 'None',
      modalIsOpen: false,
      areacode: undefined,
      municipality: undefined,
      sale_lease: undefined,
      duration: undefined,
      comparisonAreacode: undefined,
      comparisonMunipality: undefined,
    }
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  closeInsideModal = (id, municipality) => {
    this.setState({
      modalIsOpen: false,
      comparisonAreacode: id,
      comparisonMunipality: municipality,
    }, () => { console.log("closeInsideModal: ", this.state.modalIsOpen, this.state.comparisonAreacode, this.state.comparisonMunipality) })
    this.forceUpdate()
  }

  handleChangeComplete = colors => {
    this.setState({ color: colors.hex });
  };

  classNameChange = name => {
    this.setState({
      classNameChange: name
    });
  };

  chartNameChange = name => {
    this.setState({
      chartNameChange: name
    });
  };

  render() {
    const data = this.props.location.state.data;
    const sale_lease = this.props.location.state.sale_lease;
    const duration = this.props.location.state.duration;
    const data01 = Object.values(data);
    console.log(data01);
    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
      }
    };
    let comparisonReport;

    if (this.state.comparisonAreacode && this.state.comparisonMunipality) {
      comparisonReport = <MunicipalityComparisonReport chartNameChange={this.state.chartNameChange} classNameChange={this.state.classNameChange} data={data} color={this.state.color} comparisonAreacode={this.state.comparisonAreacode} comparisonMunipality={this.state.comparisonMunipality} sale_lease={sale_lease} />
    } else {
      comparisonReport = <MunicipalityReport chartNameChange={this.state.chartNameChange} classNameChange={this.state.classNameChange} color={this.state.color} data={data} sale_lease={sale_lease} />;
    }

    return (
      <section className="third-page">
        <MunicipalityDetailsHead />
        <div className="details-main">
          <MunicipalityDetailsFilter
            color={this.state.color}
            chartNameChange={this.chartNameChange}
            classNameChange={this.classNameChange}
            handleChangeComplete={this.handleChangeComplete}
          />
          <div className="details page">
            <MunicipalityReportHead
              classNameChange={this.state.classNameChange}
              color={this.state.color}
              data={data}
              sale_lease={sale_lease}
              duration={duration}
              comparisonMunipality={this.state.comparisonMunipality}
            />
            {comparisonReport}
            <MunicipalityDetailsReportSummary />
            <MunicipalityDetailsFooter />
          </div>
          <div className="compareModalNew">
            <button className="compare-new" onClick={this.openModal}>Compare Municipalities</button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal">
              <h2 className="second-page-head" ref={subtitle => this.subtitle = subtitle}> Select A Second Municipality</h2>
              <div className="compareModalClose"> <button className="modal-button" onClick={this.closeModal}>Close</button> </div>
              <div>
                <MunicipalityComparisonSearch data01={data01} sale_lease={this.props.location.state.sale_lease} closeInsideModal={this.closeInsideModal} />
              </div>
            </Modal>
          </div>
        </div>
      </section>
    );
  }
}
export default MunicipalityDetails;
