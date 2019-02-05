import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Dashboard from './Dashboard';
import Landing from './Landing';
import Login from './Login';
import Register from './Register';
import Contactus from './Contactus';
import Addpolicy from './Addpolicy';
import Addcontact from './Addcontact';
import Editpolicy from './Editpolicy';
import Result from './Result';
import PrivateRoute from '../PrivateRoute';
import NotFound from './NotFound';
// import PrivateRoute from './PrivateRoute';


const Content = () => {
  return (
    <Switch>
        <Route exact path="/" component={Landing} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/contactus" component={Contactus} />
        <PrivateRoute exact path="/addpolicy" component={Addpolicy}/>
        <PrivateRoute exact path="/addcontact" component={Addcontact}/>
        <Route exact path="/editpolicy" component={Editpolicy}/>
        <Route exact path="/result" component={Result}/>
        <Route component={NotFound}/>
      </Switch>
  )
}

export default Content
