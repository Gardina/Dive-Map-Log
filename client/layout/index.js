import React from 'react';
import GoogleMap from './google_map'
import LogBook from './log_book/LogBook'
import Grid from '@material-ui/core/Grid'

const Layout = () => {
  return (
    <Grid container direction="row"  justify="center" alignItems="center">
      {props.children}
    </Grid>
  );
};

export default Layout;
