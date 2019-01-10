import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Register extends Component {
   render(){
       return (
        <div> 
            <section>
                <form action="">
                <div class="container">
                    <h1>Register</h1>

                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <label for="psw-repeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
                    <div className="register-button-holder">
                        <div className="register-button"><Link to="/login">Sign Up</Link></div>
                    </div>
                </div>

                <div className="signin">
                    Already have an account? <Link to="/login">Log In</Link>
                </div>
                </form>

            </section>       
        </div>
       )
   }
}


export default Register;