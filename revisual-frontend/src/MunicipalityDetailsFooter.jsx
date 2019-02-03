import React, {Component} from 'react';

// Report Details header
class MunicipalityDetailsFooter extends Component {
  constructor() {
    super();

    this.state = {
      data: null,
      test: "YAY"
    }
  }
  
  userTemplate = ()=> {fetch(`http://localhost:3001/report_templates/1`)
    .then(response => response.json())
    .then(data => this.setState({ data }));
  } 

  componentWillMount = () => {
    this.userTemplate(this.props);
  }

  componentWillReceiveProps = (nextProps) => {
    this.userTemplate(nextProps);
  }


  render() {
    const user = this.state.data ? this.state.data.user : null;
    return (
        <div className="report-footer">
          <div className="report-logo"> <img alt="logo" src={this.state.data ? this.state.data.logo_url : ''} height="48" width="48"/> </div>
          <div className="report-contact">
            <div>
              <span className="contact-labels">Cell: </span><span>{user ? user.phone_cell : ''}</span>&nbsp;&nbsp;<span className="contact-labels">Office: </span><span>{user ? user.phone_office : ''}</span>&nbsp;&nbsp;<span className="contact-labels">Fax: </span><span>{user ? user.phone_fax : ''}</span> 
            </div>
            <div>
              <span className="contact-labels">Email: </span><span>{user ? user.email : ''}</span>&nbsp;&nbsp;<span className="contact-labels">Website: </span><span>{user ? user.website_url : ''}</span>
            </div>
            <div>
              <span className="contact-labels">Address: </span><span>{user ? user.address_1 : ''} {user ? user.address_2 : ''} {user ? user.city : ''} </span>
            </div>
          </div>
        </div>
    );
  }
}
export default MunicipalityDetailsFooter;