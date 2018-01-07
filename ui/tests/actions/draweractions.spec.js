import draweractions, { TOGGLE_DRAWER } from '../../actions/draweractions'
import { expect } from 'chai'

describe('When toggleDrawer() action creator is called', () => {
  test('it should return an action object with type ' + TOGGLE_DRAWER, () => {
    expect(draweractions.toggleDrawer()).to.deep.equal({
      type: TOGGLE_DRAWER
    })
  })
})
