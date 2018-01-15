import React from 'react'
import DemoPath from './DemoPath'
import DemoData from './DemoData'
import DemoDataContainer from '../containers/DemoDataContainer'
import s from '../styles/components/home.less'

class DemoComponentLeft extends React.Component {
  render () {
    return (
      <div id='compLeft' className={s.compLeft}>
        <DemoPath />
        <DemoDataContainer />
      </div >
    )
  }
}

export default DemoComponentLeft
