import React from 'react'
import s from '../styles/components/home.less'
import RaisedButton from 'material-ui/RaisedButton'
import {Link} from 'react-router-dom'

class Demo1 extends React.Component {
  render () {
    return (
      <div id='demo1' className={s.demo1}>
        <h2 className={s.heading}>Demo 1 Component</h2>
        <p className={s.paragraph}>Demontrates a nested route `/demo/1` loaded from within a parent router. Views that render only one specific component are often nested within a "Switch" provider. You may want to render
          a component as the default route for the parent, in that case a Route without path must be specified. Take a look at 'DemoPath.js'.
        </p>
        <Link to='/demo/2'><RaisedButton label='Demo Route 2' className={s.bottomRight} primary /></Link>
      </div >
    )
  }
}

export default Demo1
