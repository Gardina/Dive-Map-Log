import React from 'react';
import GoogleMapWithGrid from './google_map'
import LogBookWithGrid from './log_book/LogBook'
import Grid from '@material-ui/core/Grid'
import Layout from 'client/layout/index'

const MapLog = () => {
  return (
    <Layout>
      <GoogleMapWithGrid />
      <LogBookWithGrid />
    </Layout>
  );
};

export default MapLog;
