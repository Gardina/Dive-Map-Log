import { combineReducers } from "redux";

import logBookReducer from "client/logbook/redux/reducers";
import googleMapReducer from "client/google-map/redux/reducers";
import getCoordReducer from "client/create-dive-site/redux/reducers";
import getSiteReducer from "client/create-new-dive/redux/reducers";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  logBook: logBookReducer,
  diveSites: googleMapReducer,
  getCoord: getCoordReducer,
  getSitePosAndName: getSiteReducer,
  form: formReducer
});

export default rootReducer;
