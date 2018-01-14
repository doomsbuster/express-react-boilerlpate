import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App'
import configureStore from './reducers/store'

const store = configureStore()

const Application = () => {
  return (
    <Provider store={store}>
      <Router>
        {/* If you pass the prop exact=true here it will not load sub routes. You want to load the application home if the route doesn't match any path */}
        <Route path='/' component={App} />
      </Router>
    </Provider>
  )
}

render(
  <Application />, document.getElementById('app')
)
