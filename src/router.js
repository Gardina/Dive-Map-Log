import React from 'react'
import { Route, Switch } from 'react-router'

import Home from './components/Home';
import MapMain from './components/Home';

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/map" component={MapMain} />
    </Switch>
  </div>
)

export default routes
