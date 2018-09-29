
export const validate = (values) => {
  const errors = {};
  if (!values.SiteName) {
    errors.SiteName="Please enter Divesite name"
  }
  if (!values.MaxDepth) {
    errors.MaxDepth="Please enter your depth"
  }
  if (!values.BottomTime) {
    errors.BottomTime="Please enter dive time"
  }
  if (!values.Latitude) {
    errors.Latitude="Please enter coordinates"
  }
  if (!values.Longitude) {
    errors.Longitude="Please enter coordinates"
  }
  return errors;
}
