import toggleDrawer from '../../reducers/drawerreducer'
import draweractions from '../../actions/draweractions'
import { expect } from 'chai'

describe('Toggling the navigation drawer', () => {
  describe('Given the drawer is closed and the action type is TOGGLE_DRAWER', () => {
    test('it should toggle the drawer state isOpen to true', () => {
      const result = {
        isOpen: true
      }

      const initialState = {
        isOpen: false
      }
      expect(toggleDrawer(initialState, draweractions.toggleDrawer())).to.deep.equal(result)
    })

    test('and the current state is not passed, it should toggle the drawer state isOpen to true', () => {
      const result = {
        isOpen: true
      }
      expect(toggleDrawer(undefined, draweractions.toggleDrawer())).to.deep.equal(result)
    })
  })

  describe('Given the drawer is closed and the action type is not TOGGLE_DRAWER', () => {
    test('it should return the current state as is', () => {
      const initialState = {
        isOpen: false
      }
      expect(toggleDrawer(initialState, {})).to.deep.equal(initialState)
    })
  })
})
