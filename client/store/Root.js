import { applyMiddleware, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import React from 'react'
import rootReducer from './reducers'
import ReduxThunk from 'redux-thunk';

export const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(rootReducer),
    applyMiddleware(
      routerMiddleware(history),
  ),
)

export default props => {
  return(
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}
