import React from 'react';
import {
  Redirect,
  Route
} from 'react-router-dom';
// import {fakeAuth} from './App';

var authTokenhas = localStorage.getItem('token');


const PrivateRoute = ({component: Component, ...rest}) => (

  <Route {...rest} render={(props) => (
    1===1
    ? <Component {...props}/>
    : <Redirect to={{
      pathname: '/login',
      state: { from: props.location }
    }}/>
  )}/>
)

export default PrivateRoute;
