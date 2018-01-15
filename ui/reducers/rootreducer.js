import { combineReducers } from 'redux'
import drawer from './drawerreducer'
import appData from './datareducer'

const rootReducer = combineReducers({
  drawer,
  appData
})

export default rootReducer
