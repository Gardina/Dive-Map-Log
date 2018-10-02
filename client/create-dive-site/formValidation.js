export const validate = values => {
  const errors = {};
  if (!values.newSiteName) {
    errors.newSiteName = "Please enter Divesite name";
  }
  if (!values.Latitude || isNaN(values.Latitude)) {
    errors.Latitude = "Please enter valid coordinates";
  }
  if (!values.Longitude || isNaN(values.Longitude)) {
    errors.Longitude = "Please enter valid coordinates";
  }
  return errors;
};
