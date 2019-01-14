import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Editpolicy extends Component {

    constructor() {
        super();
        this.state = {
          companyname: "Kenny's Life Insurance Co.",
        };
      }

    render(){
        return (
         <div className="content-container"> 
             <section>
                 <form action="">
                  <div class="container">
                      <h1>Edit {this.state.companyname} Policy</h1> 
                      <label for="company"><b>Company</b></label>
                      <input type="text" placeholder="Enter Company name" name="company" required /> 
                      <label for="policy"><b>Policy #</b></label>
                      <input type="text" placeholder="Enter Policy #" name="policy" required />
                      <label for="insurance-type"><b>Insurance Type</b></label>
                         <select name="insurance-type">
                             <option value="term">Term</option>
                             <option value="whole">Whole</option>
                             <option value="accidental">Accidental</option>
                             <option value="disability">Disability</option>
                         </select>
 
                      <label for="policy-value"><b>Policy Value</b></label>
                      <input type="text" placeholder="$0.00" name="value" required />
 
                      <label for="phone"><b>Contact Phone #</b></label>
                      <input type="text" placeholder="Enter Phone #" name="phone" required />
  
                      <div className="register-button-holder">
                     <Link to="/dashboard"><div className="register-button">Update</div></Link>
                      </div>
                  </div>
  
                  
                 </form> 
             </section>         
         </div>
        )
    }
 }


export default Editpolicy;