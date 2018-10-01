export const validate = values => {
  const errors = {};
  if (!values.newSiteName) {
    errors.newSiteName = "Please enter Divesite name";
  }
  if (!values.Latitude) {
    errors.Latitude = "Please enter coordinates";
  }
  if (!values.Longitude) {
    errors.Longitude = "Please enter coordinates";
  }
  return errors;
};
