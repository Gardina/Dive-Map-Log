import { combineReducers } from 'redux';
import logBookReducer from './logBookReducer'
import googleMapReducer from './googleMapReducer'
import getCoordReducer from './getCoordReducer'
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
  logBook: logBookReducer,
  diveSites: googleMapReducer,
  getCoord: getCoordReducer,
  form: formReducer
});

export default rootReducer;
