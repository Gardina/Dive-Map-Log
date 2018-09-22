import React from 'react'
import { Route, Switch } from 'react-router'

import MapMain from './components/MapMain';
import NavBar from './components/NavBar';
import DiveSites from './components/Divesites';
import CreateDivesite from './components/CreateDivesite';
import CreateDive from './components/log_book/CreateDive'

const routes = (
  <div>
    <NavBar />
    <GoogleMapWithGrid />
    <Switch>
      <Route path="/createDive" component={CreateDive}/>
      <Route path="/diveSites" component={DiveSites} />
      <Route path="/createDivesite" component={CreateDivesite} />
      <Route path="/" component={MapMain} />
    </Switch>
  </div>
)

export default routes
