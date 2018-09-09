import { combineReducers } from 'redux';
import logBookReducer from './logBookReducer'

const rootReducer = combineReducers({
  logBook: logBookReducer
});

export default rootReducer;
