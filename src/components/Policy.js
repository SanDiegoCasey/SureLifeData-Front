import React, { Component } from 'react';

class Policy extends Component {

  constructor(props){
    super(props);
    state = {
          policies: [
            {company: 'example  company'},
            {company: 'example 2'},
            {company: '3rd example'}
          ]
    }

  }
  render(){
    const { policies } = this.state;
    return(
      <div className="policy">
          <div className="policy-title-row">
              <div className="record">Company: XYZ Life Insurance</div>
              <div className="editbutton"><Link to="/editpolicy">EDIT</Link></div>
          </div>
          <div className="record">Type: Term Life</div>
          <div className="record">Policy #: U123456789</div>
          <div className="record">Value: $100,000</div>
          <div className="record">Contact: 555-867-5309</div>
      </div>
    )
  }
}


export default Policy
