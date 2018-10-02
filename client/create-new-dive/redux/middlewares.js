import { GET_SITE_POSITION_AND_NAME } from "./types";

export default ({ dispatch, getState }) => next => action => {
  next(action);
  let match = false;
  if (action.type === GET_SITE_POSITION_AND_NAME) {
    match = getState().diveSites.filter(site => {
      return site.name === action.data.name;
    });
    match ? null : console.log("no");
  }
};
