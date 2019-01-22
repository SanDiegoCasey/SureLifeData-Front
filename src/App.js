import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Content from './components/Content';
import Footer from './components/Footer';
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import { registerUser, loginUserSuccess, getDashboard } from './actions'

class App extends Component { 

  state = {
    username: 'Jacob'
  }

componentDidMount(){
  const authToken = localStorage.getItem('token')
  this.props.dispatch(loginUserSuccess(authToken))
}

handleSubmit(event) {
  event.preventDefault()
  const username= event.target.username.value
  const password= event.target.password.value

  this.props.dispatch(registerUser(username, password))
}

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
