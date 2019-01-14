import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Content from './components/Content';
import Footer from './components/Footer';
import { connect } from 'react-redux'
import { registerUser, loginUserSuccess, getDashboard } from './actions'
import Login from './components/Login'

class App extends Component {

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
        <Nav />
        <Content />
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" name="username" />
          <input type="password" name="password" />
          <button>register</button>
        </form>
        <Login />
        <button onClick={() => this.handleLogout()}>logout</button>
        <button onClick={() => this.handleGetDashboard()}>TEST PROTECT</button>

        <Footer />
      </div>
    );
  }
}

export default connect()(App);
