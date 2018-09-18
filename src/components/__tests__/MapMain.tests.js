import React from 'react'
import {mount} from 'enzyme'
import MapMain from '../MapMain'
import Root from '../../Root'
import GoogleMap from '../google_map'
import LogBook from '../log_book/LogBook'
import { BrowserRouter as Router } from 'react-router-dom';

let wrapped;

beforeEach(()=>{
  wrapped = mount(
    <Router>
      <Root>
        <MapMain/>
      </Root>
    </Router>
  )
})

afterEach(()=>{
  wrapped.unmount()
})

it('renders GoogleMap component', () => {
  expect(wrapped.find(GoogleMap).length).toEqual(1)
  console.log(wrapped)
})

it('renders LogBook component', () => {
  expect(wrapped.find(LogBook).length).toEqual(1)
})
