import React from "react";
import Grid from "@material-ui/core/Grid";

import MyMap from "./MyMap";

const GoogleMapWithGrid = () => {
  return (
    <Grid item xs={9}>
      <MyMap />
    </Grid>
  );
};

export default GoogleMapWithGrid;
