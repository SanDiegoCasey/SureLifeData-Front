import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PolicyModal from './PolicyModal';

class PolicesSectionTitle extends Component {
  render(){
    return(
      <div className="policies-section-title">
          <div className="policiestitle">My Policies</div>
          <PolicyModal/>
      </div>
    )
  }
}

export default PolicesSectionTitle
