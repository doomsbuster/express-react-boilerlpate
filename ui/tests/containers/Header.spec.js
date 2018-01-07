import React from 'react'
import chai from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
// Import  connected (HOC) & the pure presentational components to test behavior of internal functions
import Header, { Header as PresentationalHeader } from '../../containers/Header'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem/MenuItem'
import configureMockStore from 'redux-mock-store'
import sinon from 'sinon'
import draweractions from '../../actions/draweractions'

Enzyme.configure({ adapter: new Adapter() })

describe('When Header component is rendered it', () => {
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
    wrapper = shallow(<Header store={store} />)
  })

  it('should render the AppBar', () => {
    chai.expect(wrapper.find(AppBar)).to.exist // eslint-disable-line no-unused-expressions
  })

  it('should render AppBar which has title \'Express React Boilerplate\'', () => {
    let title = 'Express React Boilerplate'
    chai.expect(wrapper.dive().find(AppBar).props().title).to.equal(title)
  })

  it('should render the Drawer', () => {
    // eslint-disable-next-line no-unused-expressions
    chai.expect(wrapper.find(Drawer)).to.exist
  })

  it('should render Drawer with two MenuItems', () => {
    chai.expect(wrapper.dive().find(Drawer).children()).to.have.lengthOf(2)
    chai.expect(wrapper.dive().find(Drawer).find(MenuItem)).to.have.lengthOf(2)
  })

  it('should have a prop named isOpen', () => {
    // Example of disabling all rules for this line
    chai.expect(wrapper.props().isOpen).to.exist // eslint-disable-line
    chai.expect(wrapper.props().isOpen).to.be.false // eslint-disable-line no-unused-expressions
  })

  it('should have a function toggleDrawer in the props', () => {
    // eslint-disable-next-line no-unused-expressions
    chai.expect(wrapper.props().toggleDrawer).to.exist
    chai.expect(wrapper.props().toggleDrawer).to.be.a('function')
  })

  /**
   * IMPORTANT - Special Case: Testing connected comonents and ensuring that the dispatch actions are called with correct actions
   * In order to test if user events are resulting in the dispatch of the correct actions you can do the following:
   * 1. Export `mapDispatchToProps` and use `inject-loader` to test that function see https://medium.com/@nantoaqui/testing-redux-connected-components-38e3be353456
   * 2. Override and spy the `dispatch` method on the `redux-mock-store` to assert that `mapDispatchToProps` dispatched the correct action
   *
   * I prefer the second method since it avoid un-necessary export of the `mapDispatchToProps` method.
   */
  it('should call toggleDrawer and dispatch spy action', () => {
    const spy = sinon.spy(store, 'dispatch')
    const spy2 = sinon.stub(draweractions, 'toggleDrawer').callsFake(() => {
      return {
        type: 'TOGGLE_DRAWER'
      }
    })
    const wrap = shallow(<Header store={store} />)
    wrap.dive().find('#button').simulate('click')
    chai.expect(spy.calledWith(draweractions.toggleDrawer())).to.be.true // eslint-disable-line no-unused-expressions
    // chai.expect(spy.calledWith(toggleDrawer())).to.be.true // eslint-disable-line no-unused-expressions
    spy.restore()
    spy2.restore()
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  afterEach(() => {
    wrapper.unmount()
  })
})

/**
 * ---------------------------------------------------------------------------------------------
 *
 * Demonstrates how to:
 * 1. Test pure presentational components
 * 2. Test methods internal to a React component
 * 3. Test component lifecycle methods
 * 4. `spy` methods on your component using `sinon`
 * 5. Disable lifecycle methods on `enzyme`'s `shallow` and `mount` rendering modes
 * 6. Simulating events using `enzyme`
 * 7. Simulating custom events using `enzyme` - check `whenMagicHandler` and `onDanceHandler`
 *
 * ---------------------------------------------------------------------------------------------
 */
describe('Given the header is pure presentational component it', () => {
  let wrapper
  let wrapperNoLifecycle
  beforeEach(() => {
    wrapper = shallow(<PresentationalHeader />)
    wrapperNoLifecycle = shallow(<PresentationalHeader />, {
      disableLifecycleMethods: true
    })
  })

  // Example of non-standard event that does not start with `on`
  it('should call whenMagicHandler()', () => {
    const whenMagicHandlerSpy = sinon.spy(PresentationalHeader.prototype, 'whenMagicHandler')
    wrapper.find('#button').props().whenMagic()
    chai.expect(whenMagicHandlerSpy.calledOnce).to.be.true
    whenMagicHandlerSpy.restore()
  })

  // Example of custom events that start with `on`
  it('should call onDanceHandler()', () => {
    const onDanceHandlerSpy = sinon.spy(PresentationalHeader.prototype, 'onDanceHandler')
    wrapper.find('#button').simulate('dance')
    chai.expect(onDanceHandlerSpy.calledOnce).to.be.true
    onDanceHandlerSpy.restore()
  })

  it('should call justSomeInternalFunctionThatCallsOtherInternalFunction()', () => {
    const justSomeInternalFunctionSpy = sinon.spy(PresentationalHeader.prototype, 'justSomeInternalFunction')
    wrapperNoLifecycle.instance().justSomeInternalFunctionThatCallsOtherInternalFunction()
    chai.expect(justSomeInternalFunctionSpy.called).to.be.true // eslint-disable-line
    justSomeInternalFunctionSpy.restore()
  })

  it('should call justSomeInternalFunctionThatReturnsSomething()', () => {
    const returnValue = wrapperNoLifecycle.instance().justSomeInternalFunctionThatReturnsSomething()
    const results = {
      what: 'returnvalue'
    }
    chai.expect(returnValue).to.deep.equal(results)
  })

  it('should call componentDidMount and the function it calls', () => {
    const functionGetsCalledFromComponentDidMountSpy = sinon.spy(PresentationalHeader.prototype, 'functionGetsCalledFromComponentDidMount')
    const componentDidMountSpy = sinon.spy(PresentationalHeader.prototype, 'componentDidMount')
    shallow(<PresentationalHeader />)
    chai.expect(functionGetsCalledFromComponentDidMountSpy.calledOnce).to.be.true // eslint-disable-line no-unused-expressions
    chai.expect(componentDidMountSpy.calledOnce).to.be.true // eslint-disable-line no-unused-expressions
    // Make sure you reset the object to original using restore for following tests
    functionGetsCalledFromComponentDidMountSpy.restore()
    componentDidMountSpy.restore()
  })

  afterEach(() => {
    wrapper.unmount()
    wrapperNoLifecycle.unmount()
  })
})
