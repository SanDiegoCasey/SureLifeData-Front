import React, { Component } from 'react';
import PolicySection from './PolicySection';
import ContactsResultContainer from './ContactsResultContainer';
import Emergency from './Emergency';




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
                <PolicySection/>
                <ContactsResultContainer/>
                <Emergency/>
            </main>
        </div>
       )
   }
}


export default Dashboard;
