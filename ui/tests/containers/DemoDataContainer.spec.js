/* eslint-disable no-unused-expressions */
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import chai from 'chai'
import configureStore from 'redux-mock-store'
import sinon from 'sinon'

import DemoDataContainer from '../../containers/DemoDataContainer'
import dataaction from '../../actions/dataaction'

Enzyme.configure({ adapter: new Adapter() })

describe('When DemoDataContainer is rendered it', () => {
  let wrapper
  let store
  let mockStore
  beforeEach(() => {
    mockStore = configureStore()
    store = mockStore({

    })
    // wrapper = shallow(<DemoDataContainer store={store} />)
  })
  it('should have a property named loadData()', () => {
    // console.log(wrapper.debug())
    // chai.expect(wrapper.props().loadData).to.exist
  })
})
