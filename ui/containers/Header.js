import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import {Link} from 'react-router-dom'
import {toggleDrawer} from '../actions/draweractions'
import {connect} from 'react-redux'

class Header extends Component {
  render () {
    return (
      <div id='header'>
        <AppBar id='appBar' title='Express React Boilerplate' />
        <Drawer id='drawer' open={this.props.isOpen}>
          <MenuItem><Link to='/about'>About</Link></MenuItem>
          <MenuItem><Link to='/demo'>Demo</Link></MenuItem>
        </Drawer>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawer:(dispatch) => dispatch(toggleDrawer)
  }
}

export default connect(undefined, mapDispatchToProps)(Header)
