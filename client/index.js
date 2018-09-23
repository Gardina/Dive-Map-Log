import React from 'react'
import ReactDOM from 'react-dom'
import App from 'client/store/App'
import Root from 'client/store/Root'

ReactDOM.render(
      <Root>
        <App history={history} />
      </Root>,
    document.getElementById('app')
  )
