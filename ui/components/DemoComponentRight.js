import React from 'react'
import s from '../styles/components/home.less'
// You will need file-loader module to be installed as dev dependencies for this to work.
import bg from '../images/pic.jpg'

class DemoComponentRight extends React.Component {
  render () {
    return (
      <div id='compRight' className={s.compRight}>
        <img src={bg} className={s.image} />
      </div >
    )
  }
}

export default DemoComponentRight
