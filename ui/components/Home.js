import React from 'react'
import DemoComponentLeft from './DemoComponentLeft'
import DemoComponentRight from './DemoComponentRight'
import s from '../styles/components/home.less'

class Home extends React.Component {
  render () {
    return (
      <div id='home' className={s.homeContainer}>
        <DemoComponentLeft id='demoLeft' />
        <DemoComponentRight id='demoRight' />
      </div>
    )
  }
}

export default Home
