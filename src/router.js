import React from 'react'
import { Route, Switch } from 'react-router'

import Home from './components/Home';
import MapMain from './components/MapMain';
import NavBar from './components/NavBar';
import DiveSites from './components/header/Divesites';
import CreateDivesite from './components/header/CreateDivesite';

const routes = (
  <div>
    <NavBar />
    <Home />
    <Switch>
      <Route exact path="/" component={MapMain} />
      <Route path="/diveSites" component={DiveSites} />
      <Route path="/createDivesite" component={CreateDivesite} />
    </Switch>
  </div>
)

export default routes
