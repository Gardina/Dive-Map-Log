import React from 'react';
import GoogleMapWithGrid from './google_map'
import CreateSiteFormWithGrid from 'client/create-dive-site'
import Grid from '@material-ui/core/Grid'
import Layout from 'client/layout/index'

const MapMain = () => {
  return (
    <Layout>
      <GoogleMapWithGrid />
      <LogBookWithGrid />
    </Layout>
  );
};

export default MapMain;
