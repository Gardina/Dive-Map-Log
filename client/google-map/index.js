import React from 'react';
import Grid from '@material-ui/core/Grid'

import GoogleMap from './google-map'

const GoogleMapWithGrid = () => {
  return (
      <Grid item xs={9} >
        <GoogleMap />
      </Grid>
  );
};

export default GoogleMapWithGrid;
