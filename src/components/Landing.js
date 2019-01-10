import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from "./Nav";

class Landing extends Component {
   render(){
       return (
        <div className="landing-container">
            <div className="landing-hero">
                <div className="landing-tagline"><h2>
                    Be sure they find your policies when they need them most.
                    </h2>
                </div>
            </div>
            <div className="get-started">
                <div className="started-button">
                    <Link to="/register">Get Started</Link>
                </div>
            </div>
            <div className="search-button-div">
                <div className="search-button">
                    <Link to="/search">Search Users</Link>
                </div>
            </div>
        </div>
       )
   }
}


export default Landing;