import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from './Dashboard';
import Search from './Search'

class Nav extends Component {
   render(){
       return (
            <div>
                <nav className="dashboard-nav" role="navigation">
                    <div className="parent">
                        <div className="left-nav"><Link to="/dashboard">Home</Link></div>
                        <div className="center-nav"><Link to="/"><img src="../SureLifeDataLogo-White-300w.png" alt="SureLifeData Logo"/></Link></div>
                        <div className="right-nav"><Link to="/search">Search</Link></div>
                    </div>
                </nav>  
            </div>   
       )
   }
}
export default Nav;