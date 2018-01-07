import React from 'react'
import chai from 'chai'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from '../../containers/Header'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem/MenuItem'
import {configureMockStore} from 'redux-mock-store'

Enzyme.configure({ adapter: new Adapter() })

describe('When Header component is rendered', () => {
  let wrapper
  let store
  let mockStore
  beforeEach(() => {
    mockStore = configureMockStore()
    store = mockStore({
      drawer: {
        isOpen: false
      }
    })
    wrapper = shallow(<Header />)
  })
  test('it should render the AppBar', () => {
    // eslint-disable-next-line no-unused-expressions
    chai.expect(wrapper.find(AppBar)).to.exist
  })

  test('it should render AppBar which has title \'Express React Boilerplate\'', () => {
    let title = 'Express React Boilerplate'
    chai.expect(wrapper.dive().find(AppBar).props().title).to.equal(title)
  })

  test('it should render the Drawer', () => {
    // eslint-disable-next-line no-unused-expressions
    chai.expect(wrapper.find(Drawer)).to.exist
  })

  test('it should render Drawer with two MenuItems', () => {
    chai.expect(wrapper.dive().find(Drawer).children()).to.have.lengthOf(2)
    chai.expect(wrapper.dive().find(Drawer).find(MenuItem)).to.have.lengthOf(2)
  })

  test('it should return the toggleDrawer function exists', () => {
    chai.expect(wrapper.props().toggleDrawer).to.exist
  })
  test('it should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('it should have a prop named isOpen', () => {
    // const connect = shallow(<Header store={store} />)
    // eslint-disable-next-line no-unused-expressions
    // chai.expect(connect.dive().props().isOpen).to.exist
  })

  test('it should have a function toggleDrawer in the props', () => {

  })

  afterEach(() => {
    wrapper.unmount()
  })
})
