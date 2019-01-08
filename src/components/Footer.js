import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Search extends Component {
   render(){
       return (
        <div> 
            <nav className="dashboard-nav" role="navigation">
                <div className="parent">
                    <div className="left-foot">Copyright © 2018 <a href="http://www.caseywhitcher.com" target="_blank">www.caseywhitcher.com</a></div>
                    <div className="center-nav"></div>
                    <div className="right-foot"><Link to="/search">Contact</Link></div>
                </div>
            </nav>         
        </div>
       )
   }
}


export default Search;