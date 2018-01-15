/* eslint-disable no-unused-expressions */
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import chai from 'chai'
import configureStore from 'redux-mock-store'
import sinon from 'sinon'

import DemoDataContainer from '../../containers/DemoDataContainer'
import dataaction, { LOAD_DATA } from '../../actions/dataaction'
import thunk from 'redux-thunk'

Enzyme.configure({ adapter: new Adapter() })

describe('Given DemoDataContainer is rendered, it', () => {
  let wrapper
  let store
  let mockStore
  let spyStore
  let action
  beforeEach(() => {
    mockStore = configureStore([thunk])
    store = mockStore({
      appData: {
        post: {}
      }
    })
    // Mock the dispatch method on store and loadData on the action creator to test mapDispatchToProps
    spyStore = sinon.spy(store, 'dispatch')
    action = sinon.stub(dataaction, 'loadData').callsFake(() => {
      return {
        type: LOAD_DATA
      }
    })
    wrapper = shallow(<DemoDataContainer store={store} />)
  })

  it('should have a prop function named loadData', () => {
    chai.expect(wrapper.props().loadData).to.exist
    chai.expect(wrapper.props().appData).to.exist
  })

  it('should have a prop named appData', () => {
    chai.expect(wrapper.props().appData).to.exist
  })

  describe('When loadData is called, it', () => {
    it('should dispatch loadData action', () => {
      // Explicitly call the loadData function on the instance of the connected component to test if store dispatches the action.
      wrapper.props().loadData()
      chai.expect(action.called).to.be.true
      chai.expect(spyStore.calledWith(dataaction.loadData())).to.be.true
    })
  })

  afterEach(() => {
    spyStore.restore()
    action.restore()
  })
})
