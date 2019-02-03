import React, {Component} from 'react';
import Modal from 'react-modal';

import MunicipalityDetailsHead from './MunicipalityDetailsHead';
import MunicipalityReport from './MunicipalityReport';
import MunicipalityDetailsReportHead from './MunicipalityDetailsReportHead';
import MunicipalityDetailsReportSummary from './MunicipalityDetailsReportSummary';
import MunicipalityDetailsFooter from './MunicipalityDetailsFooter';
import MunicipalityComparisonSearch from './MunicipalityComparisonSearch';
import MunicipalityComparisonReport from './MunicipalityComparisonReport';

//Report Details page general content
class MunicipalityDetails extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      areacode: undefined,
      municipality:undefined,
      sale_lease: undefined,
      duration: undefined,
      comparisonAreacode: undefined,
      comparisonMunipality: undefined, 
    }

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = 'black';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  } 

  closeInsideModal = (id, municipality) => {
    this.setState({
      modalIsOpen: false,
      comparisonAreacode: id,
      comparisonMunipality: municipality,
    }, () => {console.log( "closeInsideModal: ", this.state.modalIsOpen, this.state.comparisonAreacode, this.state.comparisonMunipality)})
    this.forceUpdate()
  } 

  render() {
    const data = this.props.location.state.data;
    const data01 = Object.values(data);
    console.log(data01);
    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };
    let comparisonReport;

    if (this.state.comparisonAreacode && this.state.comparisonMunipality) {
      comparisonReport = <MunicipalityComparisonReport data={data} comparisonAreacode={this.state.comparisonAreacode} comparisonMunipality={this.state.comparisonMunipality}  sale_lease={this.props.location.state.sale_lease}/>
    } else {
      comparisonReport = <MunicipalityReport data = {data} sale_lease={this.props.location.state.sale_lease}/>;
    }

    return (
      <section className="third-page">
        
          <MunicipalityDetailsHead/>
          <div className="details page">
          <div className="compareModalNew">
              <button onClick={this.openModal}>Open Modal</button>
              <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"> 
                <h2 ref={subtitle => this.subtitle = subtitle}> Select A Second Municipality</h2>
                <div className="compareModalClose"> <button onClick={this.closeModal}>X</button> </div>
                <div>
                  <MunicipalityComparisonSearch data01={data01} sale_lease={this.props.location.state.sale_lease} closeInsideModal={this.closeInsideModal}/>
                </div>
              </Modal>
          </div>
            <div className="reportHead">
              <MunicipalityDetailsReportHead/>
            </div>
            <br/>
            <br/>
             {comparisonReport}
            <br/>
            <div className="reportSummary">
              <MunicipalityDetailsReportSummary/>
            </div>
            <div className="reportFooter">
              <MunicipalityDetailsFooter/>
            </div>
          </div>
      </section>
    );
  }
}
export default MunicipalityDetails;