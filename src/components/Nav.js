import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {
   render(){
       return (
            <div>
                <nav className="dashboard-nav" role="navigation">
                    <div className="parent">
                        <div className="left-nav"><Link to="/dashboard">Home</Link></div>
                        <div className="center-nav"><Link to="/"><img src="../SureLifeDataLogo-White-300w.png" alt="SureLifeData Logo"/></Link></div>
                        <div className="right-nav-search"><Link to="/search">Search</Link></div>
                        <div className="right-nav-login"><Link to="/login">Log In</Link></div>
                        <div className="right-nav-signup"><Link to="/register">Sign Up</Link></div>
                    </div>
                </nav>  
            </div>   
       )
   }
}
export default Nav;