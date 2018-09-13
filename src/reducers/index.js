import { combineReducers } from 'redux';
import logBookReducer from './logBookReducer'
import googleMapReducer from './googleMapReducer'
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
  logBook: logBookReducer,
  diveSites: googleMapReducer,
  form: formReducer
});

export default rootReducer;
