import React from 'react'
import { shallow, mount, render } from 'enzyme';
import DiveSites from '../Divesites'

it('is defined', () => {
  const wrapper = shallow(<DiveSites/>);

  expect(wrapper).toBeDefined()
})
