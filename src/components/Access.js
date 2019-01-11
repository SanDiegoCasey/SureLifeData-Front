import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Access extends Component {

    constructor() {
        super();
        this.state = {
          user: "John",
          displayName: null,
          userID: null,
          email: "john@someemail.com",
        };
      }
    render(){
        return (
         <div className="content-container"> 
             <section>
                 <form action="">
                 <div class="container">
                     <h1>Access</h1>
                     <h2 className="h2-access">Searchability</h2>
                     <p>General site users will be able to search if an account exists by using a full name and birthday. <br/><br/>
                     Users will be shown if an account exists, however they will not be able to see any policy information without verifying access.<br/><br/>
                     Your contacts will have access to your account information automatically.</p>
                     <h2 className="h2-access">Access</h2>
                     <p>In order to access my policy information, users must provide the following information.</p>
                     <section>
                        <form action="/action_page.php">
                            <div className="container">
                                <span>Full Name</span> <span className="required">*required</span><br />
                                <span>Birthday</span> <span className="required">*required</span><br />
                                <input type="checkbox" name="phone" value="phone" checked /> Phone Number<br />
                                <input type="checkbox" name="social" value="social" /> Last four of Social Security Number<br />
                                <input type="checkbox" name="email" value="email" /> Email Address<br />
                                <input type="checkbox" name="emailcheck" value="emailcheck" /> *Email Verification<br /><br/>
                                <p>*Email verfication will cause SureLifeData to send an email to {this.state.email}. This email will notify you that a request has been made to gain access to your policy information. If we do not receive a reply in your chosen number of days we will grant access to the user</p>
                                <p></p>
                                <label for="nodays"><b>Number of days to wait for email response</b></label>
                                <select name="nodays">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="7">7</option>
                                    <option value="14">14</option>
                                </select>
                            </div>
                        </form>
                        <div className="access-button-holder">
                        <Link to="/dashboard"><div className="access-button">Update</div></Link>
                     </div>
                    </section>

                 </div>
                 </form>
 
             </section>       
         </div>
        )
    }
 }


export default Access;