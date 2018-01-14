import React from 'react'
import s from '../styles/components/home.less'
import RaisedButton from 'material-ui/RaisedButton'
import {Link} from 'react-router-dom'

class Demo2 extends React.Component {
  render () {
    return (
      <div id='demo2' className={s.demo2}>
        <h2 className={s.heading}>Demo 2 Component</h2>
        <Link to='/demo/1'><RaisedButton label='Demo Route 1' className={s.bottomRight} primary /></Link>
      </div >
    )
  }
}

export default Demo2
