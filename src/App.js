import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import {BrowserRouter} from 'react-router-dom'
import routes from './router'

const App = ({ history }) => {
  return (
    <BrowserRouter >
      { routes }
    </BrowserRouter>
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App
