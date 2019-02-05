import React, { Component } from 'react';
import { Link } from "react-router-dom";
import LogInLogOut from './LogInLogOut';

class Nav extends Component {

  handleLogout(){
    localStorage.removeItem('token');
  }

   render(){
       return (
            <div>
                <nav className="dashboard-nav" role="navigation">
                    <div className="parent">
                        <div className="left-nav"><Link to="/dashboard">Home</Link></div>
                        <div className="center-nav"><Link to="/"><img src="../SureLifeDataLogo-White-300w.png" alt="SureLifeData Logo"/></Link></div>
                        <LogInLogOut />
                    </div>
                </nav>
            </div>
       )
   }
}
export default Nav;
