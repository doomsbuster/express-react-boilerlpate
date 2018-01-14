import React from 'react'
import DemoPath from './DemoPath'
import DemoData from './DemoData'
import s from '../styles/components/home.less'

class DemoComponentLeft extends React.Component {
  render () {
    return (
      <div id='compLeft' className={s.compLeft}>
        <DemoPath />
        <DemoData />
      </div >
    )
  }
}

export default DemoComponentLeft
