import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Content from './components/Content';
import Footer from './components/Footer';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { loginUserSuccess, getDashboard } from './actions';




class App extends Component{

componentDidMount(){
  const authToken = localStorage.getItem('token')
  this.props.dispatch(loginUserSuccess(authToken))
}

// handleSubmit(event) {
//   event.preventDefault()
//   const firstname= event.target.firstname.value
//   const lastname= event.target.lastname.value
//   const username= event.target.username.value
//   const password= event.target.password.value
//
//   this.props.dispatch(registerUser(firstname, lastname, username, password))
// }

handleLogout(){
  localStorage.removeItem('token')

}

handleGetDashboard(){
  this.props.dispatch(getDashboard())
}

  render() {
    return (
      <div className="App">
      {/* <div className="hello">Hello {this.state.firstname}</div> */}
        <Nav />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect()(App));
