import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LogInLogOut extends Component {

  handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    localStorage.removeItem('userImage');
    window.location = '/';
  }



   render(){
     return (
        <div className="loginlogout">
          <div className="right-nav-login"><Link to="/login" id="loginbut">Log In</Link></div>
          <button onClick ={() => this.handleLogout()} className="button-right-nav-login" id="logoutbut">Log Out</button>
          <div className="right-nav-signup"><Link to="/register">Sign Up</Link></div>
        </div>
       )
   }
}


export default LogInLogOut;
