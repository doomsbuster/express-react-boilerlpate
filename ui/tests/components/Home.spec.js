/* eslint-disable no-unused-expressions */
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

import Home from '../../components/Home'

Enzyme.configure({ adapter: new Adapter() })

describe('When Home component renders', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Home />)
  })

  it('should match the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  afterEach(() => {
    wrapper.unmount()
  })
})
