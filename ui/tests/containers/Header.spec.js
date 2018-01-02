import React from 'react'
import chai from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from '../../containers/Header'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem/MenuItem'

Enzyme.configure({ adapter: new Adapter() })

describe('When Header component is rendered', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Header />)
  })
  test('it should render the AppBar', () => {
    chai.expect(wrapper.find(AppBar)).to.exist
  })

  test('it should render AppBar which has title \'Express React Boilerplate\'', (params) => {
    let title = 'Express React Boilerplate'
    chai.expect(wrapper.find(AppBar).props().title).to.equal(title)
  })

  test('it should render the Drawer', () => {
    chai.expect(wrapper.find(Drawer)).to.exist
  })

  test('it should render Drawer with two MenuItems', () => {
    chai.expect(wrapper.find(Drawer).children()).to.have.lengthOf(2)
    chai.expect(wrapper.find(Drawer).find(MenuItem)).to.have.lengthOf(2)
  })
  test('it should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  afterEach(() => {
    wrapper.unmount()
  })
})
