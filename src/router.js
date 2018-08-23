import React from 'react'
import { Route, Switch } from 'react-router'

import Home from './components/Home';
import MapMain from './components/MapMain';
import NavBar from './components/NavBar'

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/map" component={MapMain} />
    </Switch>
  </div>
)

export default routes
