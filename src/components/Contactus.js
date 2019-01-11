import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Contactus extends Component {
   render(){
       return (
        <div className="content-container"> 
            <form action="">
            <div className="container">
                <label for="name">Your Name</label>
                <input type="text" id="contactus-name" name="name" placeholder="Your name.." />

                <label for="email">e-Mail Address</label>
                <input type="text" id="contactus-email" name="email" placeholder="Your e-mail address" />

                <label for="phone">phone #</label>
                <input type="text" id="contactus-phone" name="phone" placeholder="Your phone number" />

                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style={{height: 200 + 'px'}} />

                <div className="register-button-holder">
                        <div className="register-button"><Link to="/dashboard">Send</Link></div>
                </div>
            </div>
            </form>        
        </div>
       )
   }
}


export default Contactus;