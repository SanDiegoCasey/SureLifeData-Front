import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
          user: "John",
          displayName: null,
          userID: null
        };
      }

   render(){
       return (
        <div className="content-container">
            <main role="main">
                <header role="banner" className="dash-header">
                        <h1>Welcome back {this.state.user},</h1>
                </header>
                <section className="policies">
                    <div className="mypolicies-container">
                        <div className="policiestitle">My Policies</div>
                        <div className="policyadd"><Link to="/addpolicy">Add Policy+</Link></div>
                    </div>
                    <div className="policyresults-container">
                        <div className="policy">
                            <div className="policy-title-row">
                                <div className="record">Company: XYZ Life Insurance</div>
                                <div className="editbutton"><Link to="/editpolicy">EDIT</Link></div>
                            </div>
                            <div className="record">Type: Term Life</div>
                            <div className="record">Policy #: U123456789</div>
                            <div className="record">Value: $100,000</div>
                            <div className="record">Contact: 555-867-5309</div>
                        </div>
                        <div className="policy">
                            <div className="policy-title-row">
                                <div className="record">Company: XYZ Life Insurance</div>
                                <div className="editbutton"><Link to="/editpolicy">EDIT</Link></div>
                            </div>
                            <div className="record">Type: Accidental Death</div>
                            <div className="record">Policy #: J987654321</div>
                            <div className="record">Value: $5,000</div>
                            <div className="record">Contact: 555-555-1212</div>
                        </div>
                        <div className="policy">
                            <div className="policy-title-row">
                                <div className="record">Company: XYZ Life Insurance</div>
                                <div className="editbutton"><Link to="/editpolicy">EDIT</Link></div>
                            </div>
                            <div className="record">Type: Accidental Death</div>
                            <div className="record">Policy #: Y6543453</div>
                            <div className="record">Value: $200</div>
                            <div className="record">Contact: 555-555-1212</div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="contacts-container">
                        <div className="contactstitle">My Contacts</div>
                        <div className="policyadd"><Link to="/addcontact">Add Contact+</Link></div>
                    </div>
                    <div className="contacts-container-photos">
                        <div className="contact">
                            <div className="photo"></div>
                            <div className="name">John Smith</div>
                            <div className="deletebutton"><Link to="/delete">DELETE</Link></div>
                        </div>
                        <div className="contact">
                            <div className="photo"></div>
                            <div className="name">Jane Smith</div>
                            <div className="deletebutton"><Link to="/delete">DELETE</Link></div>
                        </div>
                        <div className="contact">
                            <div className="photo"></div>
                            <div className="name">Joe Smith</div>
                            <div className="deletebutton"><Link to="/delete">DELETE</Link></div>
                        </div>
                    </div>
                </section>
                <hr />
                <section>
                    <div className="access-container">
                        <div className="accesstitle">Emergency Access</div>
                        <div className="access-button"><Link to="/access">Setup</Link></div>
                    </div>
                </section>
            </main>
        </div>
       )
   }
}


export default Dashboard;