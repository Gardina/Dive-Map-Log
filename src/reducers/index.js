import { combineReducers } from 'redux';
import logBookReducer from './logBookReducer'
import googleMapReducer from './googleMapReducer'

const rootReducer = combineReducers({
  logBook: logBookReducer,
  diveSites: googleMapReducer
});

export default rootReducer;
