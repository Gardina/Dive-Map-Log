import React from 'react';
import Grid from '@material-ui/core/Grid'

const Layout = (props) => {
  return (
    <Grid container direction="row"  justify="center" alignItems="center">
      {props.children}
    </Grid>
  );
};

export default Layout;
