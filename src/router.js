import React from 'react'
import { Route, Switch } from 'react-router'

import MapMain from './components/MapMain';
import NavBar from './components/NavBar';
import DiveSites from './components/Divesites';
import CreateDivesite from './components/CreateDivesite';

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route path="/diveSites" component={DiveSites} />
      <Route path="/createDivesite" component={CreateDivesite} />
      <Route exact path="/" component={MapMain} />
    </Switch>
  </div>
)

export default routes
