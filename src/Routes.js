import AppliedRoute from './components/AppliedRoute';

import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Search from './components/Search';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import Contactus from './components/Contactus';
import Access from './components/Access';
import Addpolicy from './components/Addpolicy';
import Addcontact from './components/Addcontact';
import Editpolicy from './components/Editpolicy';
import Result from './components/Result';
import NotFound from './components/NotFound';

export default ({ childProps }) =>
  <Switch>
  <Route exact path="/" component={Landing} />
  <AppliedRoute exact path="/dashboard" component={Dashboard} props={childProps} />
  <Route path="/search" component={Search} />
  <AppliedRoute exact path="/login" component={Login} props={childProps} />
  <Route exact path="/register" component={Register} />
  <Route exact path="/contactus" component={Contactus} />
  <Route exact path="/access" component={Access}/>
  <Route exact path="/addpolicy" component={Addpolicy}/>
  <Route exact path="/addcontact" component={Addcontact}/>
  <Route exact path="/editpolicy" component={Editpolicy}/>
  <Route exact path="/result" component={Result}/>
  <Route component={NotFound} />
  </Switch>;
