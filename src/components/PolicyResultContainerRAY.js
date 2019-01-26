import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPolicies, deletePolicy } from '../actions/policyActions';
import PropTypes from 'prop-types';


class PolicyResultContainer extends Component {


  componentDidMount() {
    this.props.getPolicies();
  }

  onDeleteClickPolicy = (id) => {
    this.props.deletePolicy(id);
  };
  // constructor(props){
  //   super(props);

  render(){
    console.log(this.props);

    return(
      <div className="policyresults-container">
      { this.props.items.map(({ id, company, typeofins, policynum, dollarvalue, contactnum }) => (
  <div className="policy" key={id}>
      <div className="policy-title-row">
          <div className="record-title">{company}</div>
          <input type="button"
            value="DELETE"
            onClick={this.onDeleteClickPolicy.bind(this,id)}
            className="editbutton"/>
        </div>
      <div className="record">Type: {typeofins}</div>
      <div className="record">Policy #: {policynum}</div>
      <div className="record">Value: {dollarvalue}</div>
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
  items: state.policy.items || []
})

export default connect(mapStateToProps, { getPolicies, deletePolicy })(PolicyResultContainer)
