import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Addcontact extends Component {
   render(){
       return (
        <div className="content-container"> 
            <section>
                <form action="">
                 <div class="container">
                     <h1>Add a Contact</h1> 
                     <label for="contact-name"><b>Name</b></label>
                     <input type="text" placeholder="Enter Full Name" name="contact-name" required /> 
                     <label for="contact-e-mail"><b>e-mail Address</b></label>
                     <input type="text" placeholder="Enter e-mail address" name="policy" required />
                     <input type="checkbox" name="phone" value="phone" checked />Grant full access to your policy information<br />
 
                     <div className="register-button-holder">
                    <Link to="/dashboard"><div className="register-button">Add</div></Link>
                     </div>
                 </div>                 
                </form> 
            </section>        
        </div>
       )
   }
}


export default Addcontact;