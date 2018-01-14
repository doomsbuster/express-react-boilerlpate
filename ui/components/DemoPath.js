import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Demo1 from './Demo1'
import Demo2 from './Demo2'

class DemoPath extends React.Component {
  render () {
    return (
      <Switch>
        <Route path='/demo/1' component={Demo1} />
        <Route path='/demo/2' component={Demo2} />
        {/* When there is no path, this will be default route for this component */}
        <Route component={Demo1} />
      </Switch>
    )
  }
}

export default DemoPath
