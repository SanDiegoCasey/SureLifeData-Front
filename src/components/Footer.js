import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Search extends Component {
   render(){
       return (
        <div className="footer-div"> 
            <nav className="footer-nav" role="navigation">
                <div className="footer-parent">
                    <div className="left-foot">Copyright © 2018 <a href="http://www.caseywhitcher.com" target="_blank">www.caseywhitcher.com</a></div>
                    <div className="center-nav"></div>
                    <div className="right-foot"><Link to="/contact">Contact</Link></div>
                </div>
            </nav>         
        </div>
       )
   }
}


export default Search;