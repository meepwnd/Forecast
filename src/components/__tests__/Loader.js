import React from 'react'
import {shallow} from 'enzyme'
import Loader from '../Loader'

test('should render correctly', () => {
  const wrapper = shallow(<Loader />)
  expect(wrapper).toMatchSnapshot()
})

test('should render correct text inside', () => {
  const wrapper = shallow(<Loader />)
  expect(wrapper.text()).toEqual('Please wait...')
})