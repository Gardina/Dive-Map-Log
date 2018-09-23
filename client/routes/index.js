import React from 'react'
import { Route, Switch } from 'react-router'

import Layout from 'client/layout'
import NavBar from 'client/navbar';
import GoogleMapWithGrid from 'client/google-map'
import LogBookWithGrid from 'client/logbook';
import CreateSiteFormWithGrid from 'client/create-dive-site'

const routes = (
  <div>
    <NavBar />
    <Layout>
      <GoogleMapWithGrid />
      <Switch>
        <Route path="/createDivesite" component={CreateSiteFormWithGrid} />
        <Route path="/" component={LogBookWithGrid}/>
      </Switch>
    </Layout>

  </div>
)

export default routes
