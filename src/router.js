import React from 'react'
import { Route, Switch } from 'react-router'

import Home from './components/Home';
import MapMain from './components/MapMain';
import NavBar from './components/NavBar'

const routes = (
  <div>
    <NavBar />
    <Home />
    <Switch>
      <Route exact path="/" component={MapMain} />
      <Route path="/map" component={MapMain} />
    </Switch>
  </div>
)

export default routes
