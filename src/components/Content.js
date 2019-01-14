import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Dashboard from './Dashboard';
import Search from './Search';
import Landing from './Landing';
import Login from './Login';
import Register from './Register';
import Contactus from './Contactus';
import Access from './Access';
import Addpolicy from './Addpolicy';
import Addcontact from './Addcontact';
import Editpolicy from './Editpolicy';
import Result from './Result';

const Content = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route path="/search" component={Search} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/contactus" component={Contactus} />
      <Route exact path="/access" component={Access}/>
      <Route exact path="/addpolicy" component={Addpolicy}/>
      <Route exact path="/addcontact" component={Addcontact}/>
      <Route exact path="/editpolicy" component={Editpolicy}/>
      <Route exact path="/result" component={Result}/>
    </Switch>
  )
}

export default Content