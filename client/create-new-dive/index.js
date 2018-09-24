import React from 'react';
import Grid from '@material-ui/core/Grid'

import CreateNewDiveForm from 'client/create-new-dive/CreateNewDiveForm'

const CreateNewDiveFormWithGrid = () => {
    return (
        <Grid item xs={3} >
          <CreateNewDiveForm />
        </Grid>
    )
};

export default CreateNewDiveFormWithGrid;
