import React, { Component } from 'react';
import uuid from 'uuid';
import { Link } from 'react-router-dom';


class PolicyResultContainer extends Component {
  // constructor(props){
  //   super(props);
      state = {
            policies:  [
                {id: uuid(),
                  company: 'example  company',
                  typeofins: 'life',
                  policynum: "234234",
                  contactnum: "23423423",
                  value: "$500,000"
                },
                {id: uuid(),
                  company: 'co 2',
                  typeofins: 'term',
                  policynum: "whodat",
                  contactnum: "dere",
                  value: "1 Million dollars bwahahaha"
                },
                {id: uuid(),
                  company: 'co 3',
                  typeofins: 'disability',
                  policynum: "asdfasfasdf",
                  contactnum: "u2b34",
                  value: "bout tree fity"
                }
              ]
            }

  render(){
    const { policies } = this.state;
    return(
      <div className="policyresults-container">
        { policies.map(({ id, company, typeofins, policynum, value, contactnum }) => (
          <div className="policy" key={id}>
              <div className="policy-title-row">
                  <div className="record-title">{company}</div>
                  <div className="editbutton"><Link to="/editpolicy">EDIT</Link></div>
              </div>
              <div className="record">Type: {typeofins}</div>
              <div className="record">Policy #: {policynum}</div>
              <div className="record">Value: {value}</div>
              <div className="record">Contact: {contactnum}</div>
          </div>
        ))}
      </div>
    )
  }
}


// class PolicyResultContainer extends Component {
//   render(){
//     return(
//       <Policy/>
//     )
//   }
// }

export default PolicyResultContainer
