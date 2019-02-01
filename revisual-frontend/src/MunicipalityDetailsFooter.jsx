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
      <div>
        <div className="reportFooter">
          <img src={this.state.data ? this.state.data.logo_url : ''} height="48" width="48"/>
          <br/>
          <div className="reportContact">
            C {user ? user.phone_cell : ''} <br/>
            O {user ? user.phone_office : ''} <br/>
            f {user ? user.phone_fax : ''} <br/>
          </div>
          <br/>
          <br/>
          <div className="reportContact" >
            {user ? user.address_1 : ''} <br/>
            {user ? user.address_2 : ''} <br/>
            {user ? user.city : ''} <br/>
          </div>
          <div>
            Email {user ? user.email : ''} <br/>
            Website {user ? user.website_url : ''} <br/>
          </div>
        </div>
      </div>
    );
  }
}
export default MunicipalityDetailsFooter;