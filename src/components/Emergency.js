import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Emergency extends Component {
  render(){
    return(
      <section>
          <div className="access-container">
              <div className="accesstitle">Emergency Access</div>
              <div className="access-button"><Link to="/access">Setup</Link></div>
          </div>
      </section>
    )
  }


}

export default Emergency
