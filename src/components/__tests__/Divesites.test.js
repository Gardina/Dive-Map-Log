import React from 'react'
import { shallow, mount, render } from 'enzyme';
import DiveSites from '../Divesites'

it('contains h2', () => {
  const wrapper = shallow(<DiveSites/>);

  expect(wrapper.find('h2').length).toEqual(1)
})
