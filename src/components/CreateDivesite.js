import React from 'react';
import GoogleMap from './google_map'
import Grid from '@material-ui/core/Grid'

import CreateSiteForm from './createSiteForm'

const CreateDivesite = () => {
    return (
      <Grid container direction="row"  justify="center" alignItems="center">
        <Grid item xs={9} >
          <GoogleMap />
        </Grid>
        <Grid item xs={3} >
          <CreateSiteForm />
        </Grid>
      </Grid>
    )
};

export default CreateDivesite;
