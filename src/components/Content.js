import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Search from './Search';
import Landing from './Landing';
import Login from './Login';
import Register from './Register';
import Contact from './Contact';
import Access from './Access'

const Content = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route path="/search" component={Search} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/access" component={Access}/>
    </Switch>
  )
}

export default Content