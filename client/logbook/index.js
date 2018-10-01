import React from "react";
import LogBook from "./logbook";
import Grid from "@material-ui/core/Grid";

const LogBookWithGrid = () => {
  return (
    <Grid item xs={3}>
      <LogBook />
    </Grid>
  );
};

export default LogBookWithGrid;
