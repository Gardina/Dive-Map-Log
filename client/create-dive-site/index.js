import React from "react";
import Grid from "@material-ui/core/Grid";

import CreateSiteForm from "client/create-dive-site/CreateSiteForm";

const CreateSiteFormWithGrid = () => {
  return (
    <Grid item xs={3}>
      <CreateSiteForm />
    </Grid>
  );
};

export default CreateSiteFormWithGrid;
