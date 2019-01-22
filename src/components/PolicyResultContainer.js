import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPolicies, deletePolicy } from '../actions/policyActions';
import PropTypes from 'prop-types';


class PolicyResultContainer extends Component {


  componentDidMount() {
    this.props.getPolicies();
  }
  // constructor(props){
  //   super(props);

  render(){
    const { policies } = this.props.policy;
    return(
      <div className="policyresults-container">
        { policies.map(({ id, company, typeofins, policynum, value, contactnum }) => (
          <div className="policy" key={id}>
              <div className="policy-title-row">
                  <div className="record-title">{company}</div>
                  <button className="editbutton"><Link to="/editpolicy">DELETE</Link></button>
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

PolicyResultContainer.propTypes = {
  getPolicies: PropTypes.func.isRequired,
  policy: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  policy: state.policy
})

export default connect(mapStateToProps, { getPolicies, deletePolicy })(PolicyResultContainer)
