import React from 'react'
import styles from './styles/main.less'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div id='root' className={styles.root}>
          <p>This is the first react app</p>
        </div>
      </MuiThemeProvider >
    )
  }
}
