import React from 'react';
import GoogleMap from './googleMap'
import Grid from '@material-ui/core/Grid'

const GoogleMapWithGrid = () => {
  return (
      <Grid item xs={9} >
        <GoogleMap />
      </Grid>
  );
};

export default GoogleMapWithGrid;
