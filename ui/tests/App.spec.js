import React from 'react'
import App from '../App'
import chai from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('When App is rendered', () => {
  test('it should render the root component with ID=root', () => {
    const wrapper = shallow(<App />)
    chai.expect(wrapper.find('#root')).to.exist
    expect(wrapper.find(App)).toMatchSnapshot()
  })
})
