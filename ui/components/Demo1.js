import React from 'react'
import s from '../styles/components/home.less'
import RaisedButton from 'material-ui/RaisedButton'
import {Link} from 'react-router-dom'

class Demo1 extends React.Component {
  render () {
    return (
      <div id='demo1' className={s.demo1}>
        <h2>Demo 1 Component</h2>
        <Link to='/demo/2'><RaisedButton label='Demo Route 2' className={s.bottomRight} primary /></Link>
      </div >
    )
  }
}

export default Demo1
