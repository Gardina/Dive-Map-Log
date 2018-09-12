import React from 'react'
import {mount} from 'enzyme'
import MapMain from '../MapMain'
import Root from '../../Root'
import GoogleMap from '../google_map'
import LogBook from '../log_book/LogBook'

let wrapped;

beforeEach(()=>{
  wrapped = mount(
    <Root>
      <MapMain />
    </Root>
  )
})

afterEach(()=>{
  wrapped.unmount()
})

it('renders GoogleMap component', () => {
  expect(wrapped.find(GoogleMap).length).toEqual(1)
})

it('renders LogBook component', () => {
  expect(wrapped.find(LogBook).length).toEqual(1)
})
