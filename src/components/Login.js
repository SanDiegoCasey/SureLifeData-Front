import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import {loginUser} from '../actions'

class Login extends Component {

    handleSubmit(event) {
        event.preventDefault()
        const username= event.target.username.value
        const password= event.target.password.value        
        this.props.dispatch(loginUser(username, password))
      }
      

    render(){
        return (
         <div className="content-container"> 
             <section>
                 <form onSubmit={(e) => this.handleSubmit(e)}>
                 <div className="container">
                     <h1>Log In</h1>
 
                     <label htmlFor="email"><b>Email</b></label>
                     <input type="text" placeholder="Enter Email" name="username" required />
 
                     <label htmlFor="psw"><b>Password</b></label>
                     <input type="password" placeholder="Enter Password" name="password" required />
 
                    <div className="register-button-holder">
                        <input className="register-button" type="submit" value="Log In" />
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


export default connect()(Login);