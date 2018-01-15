import React from 'react'
import s from '../styles/components/home.less'

class DemoData extends React.Component {
  componentDidMount () {
    this.props.loadData()
  }

  render () {
    return (
      <div id='demoData' className={s.demoData}>
        <h2>DemoData</h2>
        <h2 className={s.subHeader}>{this.props.appData.title}</h2>
        <p className={s.paragraph}>{this.props.appData.body}</p>
      </div >
    )
  }
}

export default DemoData
