import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'

class AppContent extends React.Component {
  render () {
    return (
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/' component={Home} />
      </Switch>
    )
  }
}

export default AppContent
