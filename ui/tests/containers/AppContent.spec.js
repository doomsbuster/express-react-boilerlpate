/* eslint-disable no-unused-expressions */
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import AppContent from '../../containers/AppContent'
import chai from 'chai'
// Use memory router for non browser environments and tests
import { MemoryRouter } from 'react-router'
import { Route } from 'react-router-dom'

Enzyme.configure({ adapter: new Adapter() })

/**
 * TESTING COMPONENTS WITH NESTED ROUTES:
 *
 * This test suite demonstrates what to unit test when you have a React component that has routes rendering other components.
 * A MemoryRouter is mounted with a list of routes to be tested as `initialEntries` then your tests verify if the correct component
 * is loaded when the route matches a specified route whose index is provided by `initialIndex`.
 *
 * Note that using shallow with `.dive()` will not work since it will not load the component that the sub route renders.
 */
describe('Given AppComponent is rendered', () => {
  let wrapper

  it('When path is "/" it should should render the home page', () => {
    // Tests that a specfic route loads correct react component
    wrapper = mount(
      <MemoryRouter initialEntries={['/', '/about']} initialIndex={0}>
        <AppContent />
      </MemoryRouter>
    )
    chai.expect(wrapper.find('.homeContainer')).to.have.lengthOf(1)
  })

  it('When path is "/about" it should should render the about page', () => {
    // Tests that a specific route loads correct react component
    wrapper = mount(
      <MemoryRouter initialEntries={['/', '/about']} initialIndex={1}>
        <AppContent />
      </MemoryRouter>
    )
    chai.expect(wrapper.find('#about')).to.have.lengthOf(1)
  })

  it('should check that the route definitions and paths are correct', () => {
    wrapper = shallow(
      <AppContent />
    )

    // You will have to dive 2 levels deep to get to the root of the AppContent component, if you wrap your component in MemoryRouter
    // console.log(wrapper.debug()) // Renders <Router />
    // console.log(wrapper.dive().debug()) // Renders <b />
    // console.log(wrapper.dive().dive().debug()) // Renders <Switch>

    chai.expect(wrapper.find(Route).first().props().path).to.equal('/about')
    chai.expect(wrapper.find(Route).last().props().path).to.equal('/')

    // Be careful that if you save a snapshot when using `mount` on`MemoryRouter` jest tests will be significantly slow due to the size of the snapshot.
    // Notice, how I am diving straight into the Switch component and testing that against my components snapshot instead.
    expect(wrapper).toMatchSnapshot()
  })
})
