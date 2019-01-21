import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PolicesSectionTitle extends Component {
  render(){
    return(
      <div className="policies-section-title">
          <div className="policiestitle">My Policies</div>
          <div className="policyadd"><Link to="/addpolicy">Add Policy+</Link></div>
      </div>
    )
  }
}

export default PolicesSectionTitle
