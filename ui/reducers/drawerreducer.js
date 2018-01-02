'use strict'

import { TOGGLE_DRAWER } from '../actions/draweractions'

const initialState = {
  isOpen: false
}

export default function toggleDrawer (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return Object.assign({}, state, { isOpen: !state.isOpen })
    default:
      return state
  }
}
