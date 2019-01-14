import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { registerUser } from '../actions'
import { connect } from 'react-redux'

class Register extends Component {

    handleSubmit(event) {
        event.preventDefault()
        const username= event.target.username.value
        const password= event.target.password.value        
        this.props.dispatch(registerUser(username, password))
      }

   render(){
       return (
        <div className="content-container"> 
            <section>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                <div className="container">
                    <h1>Register</h1>               

                    <label htmlFor="firstname"><b>First Name</b></label>
                     <input type="text" placeholder="Enter First Name" name="firstname" required />

                     {/* <label htmlFor="lastname"><b>Last Name</b></label>
                     <input type="text" placeholder="Enter First Name" name="lastname" required /> */}

                     <label htmlFor="username"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="username" required />

                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" placeholder="Enter A Password" name="password" required />

                    <label htmlFor="password-repeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="password-repeat" required />
                    <div className="register-button-holder">
                        <input className="register-button" type="submit" value="Sign Up" />
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


export default connect()(Register);