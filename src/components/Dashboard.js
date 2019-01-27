import React, { Component } from 'react';
import PolicySection from './PolicySection';
import ContactsResultContainer from './ContactsResultContainer';
import Emergency from './Emergency';




class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
          user: "Casey",
          displayName: null,
          userID: null,
          userIMG: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/49587660_10155740275492513_1958186675280543744_n.jpg?_nc_cat=102&_nc_ht=scontent-ort2-1.xx&oh=a2cbe05a96d3b30bfb98c244e162a230&oe=5CC14560"
        };
      }

   render(){
       return (
        <div className="content-container">
            <main role="main">
                <header role="banner" className="dash-header">
                        <h1>Welcome back {this.state.user},</h1>
                        <div className="profilePhoto" >
                          <div className="photo" style={ { backgroundImage: `url(${this.state.userIMG})` } }></div>
                        edit photo
                        </div>

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
