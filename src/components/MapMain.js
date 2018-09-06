import React from 'react';
import GoogleMap from './google_map'
import LogBook from './log_book/LogBook'
import Grid from '@material-ui/core/Grid'

const MapMain = () => {
  return (
    <Grid container direction="row"  justify="center" alignItems="center">
      <Grid item xs={9} >
        <GoogleMap />
      </Grid>
      <Grid item xs={3} >
        <LogBook />
      </Grid>
    </Grid>
  );
};

export default MapMain;
