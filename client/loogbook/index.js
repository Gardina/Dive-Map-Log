import React from 'react';
import LogBook from './log_book/LogBook'
import Grid from '@material-ui/core/Grid'

const LogBookWithGrid = () => {
  return (
      <Grid item xs={3} >
        <LogBook />
      </Grid>
  );
};

export default LogBookWithGrid;
