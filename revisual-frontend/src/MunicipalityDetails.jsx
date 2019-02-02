import React, {Component} from 'react';
import MunicipalityDetailsHead from './MunicipalityDetailsHead';
import MunicipalityReport from './MunicipalityReport';
import MunicipalityDetailsReportHead from './MunicipalityDetailsReportHead';
import MunicipalityDetailsReportSummary from './MunicipalityDetailsReportSummary';
import MunicipalityDetailsFooter from './MunicipalityDetailsFooter';
import Modal from 'react-modal';
import MunicipalityComparisonSearch from './MunicipalityComparisonSearch';

//Report Details page general content
class MunicipalityDetails extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      areacode: "",
      municipality:"",
      sale_lease: "",
      duration: "",
      comparisonAreacode: "",
      comparisonMunipality: "",
      comparisonSale_lease: "",
      comparisonDuration: "",  
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
    }, () => {console.log( "closeInsideModal: ", this.state.modalIsOpen, this.state.comparisonAreacode, this.state.comparisonMunipality)});
  } 

  render() {
    const data = this.props.location.state.data;
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
    
    return (
      <section className="third-page">
        
          <MunicipalityDetailsHead/>
          <div className="details page">
            <div className="reportHead">
              <MunicipalityDetailsReportHead/>
            </div>
            <br/>
            <br/>
            <MunicipalityReport data = {data} sale_lease={this.props.location.state.sale_lease}/>
            <br/>
            <div className="reportSummary">
              <MunicipalityDetailsReportSummary/>
            </div>
            <div className="reportFooter">
              <MunicipalityDetailsFooter/>
            </div>
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
                <MunicipalityComparisonSearch data={data} sale_lease={this.props.location.state.sale_lease} closeInsideModal={this.closeInsideModal}/>
              </div>
            </Modal>
          </div>
      </section>
    );
  }
}
export default MunicipalityDetails;