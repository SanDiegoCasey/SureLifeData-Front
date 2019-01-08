import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from "./Nav";

class Landing extends Component {
   render(){
       return (
        <div className="landing-container">
            <div className="landing-hero">landing content</div>
            <div className="get-started"><button>Get Started</button></div>
            <div className="search-button"><button>Search Users</button></div>
        </div>
       

       )
   }
}


export default Landing;