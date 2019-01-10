import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Login extends Component {
    render(){
        return (
         <div> 
             <section>
                 <form action="">
                 <div class="container">
                     <h1>Log In</h1>
 
                     <label for="email"><b>Email</b></label>
                     <input type="text" placeholder="Enter Email" name="email" required />
 
                     <label for="psw"><b>Password</b></label>
                     <input type="password" placeholder="Enter Password" name="psw" required />
 
                    <div className="register-button-holder">
                         <div className="register-button"><Link to="/dashboard">Log In</Link></div>
                     </div>
                 </div>
 
                 <div className="signin">
                     Don't have an account? <Link to="/register">Register</Link>
                 </div>
                 </form>
 
             </section>       
         </div>
        )
    }
 }


export default Login;