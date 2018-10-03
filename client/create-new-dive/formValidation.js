export const validate = values => {
  const errors = {};
  if (!values.newSiteName) {
    errors.newSiteName = "Please enter Divesite name";
  }
  if (!values.Date) {
    errors.Date = "Please enter valid date";
  }
  if (!values.MaxDepth || isNaN(values.MaxDepth)) {
    errors.MaxDepth = "Please enter your depth";
  }
  if (!values.BottomTime || isNaN(values.BottomTime)) {
    errors.BottomTime = "Please enter dive time";
  }
  if (!values.Latitude || isNaN(values.Latitude)) {
    errors.Latitude = "Please enter valid coordinates";
  }
  if (!values.Longitude || isNaN(values.Longitude)) {
    errors.Longitude = "Please enter valid coordinates";
  }
  return errors;
};
