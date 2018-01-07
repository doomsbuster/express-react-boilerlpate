import React from 'react'
import App from '../App'
import chai from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('When App is rendered', () => {
  it('it should render the root component with ID=root', () => {
    const wrapper = shallow(<App />)
    // eslint-disable-next-line no-unused-expressions
    chai.expect(wrapper.find('#root')).to.exist
    expect(wrapper.find(App)).toMatchSnapshot()
  })
})
