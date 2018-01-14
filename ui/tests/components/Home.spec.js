/* eslint-disable no-unused-expressions */
import React from 'react'
import chai from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Home from '../../components/Home'

Enzyme.configure({ adapter: new Adapter() })

describe('When Home component renders', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Home />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
    chai.expect(true).to.be.true
  })

  afterEach(() => {
    wrapper.unmount()
  })
})
