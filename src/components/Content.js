import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Search from './Search';
import Landing from './Landing';

const Content = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route path="/search" component={Search} />
    </Switch>
  )
}

export default Content
