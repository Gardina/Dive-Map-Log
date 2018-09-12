import React from 'react'
import {mount} from 'enzyme'
import App from '../../App.js'
import Root from '../../Root.js'
import {BrowserRouter} from 'react-router-dom'

let wrapped;

beforeEach(()=>{
  wrapped = mount(
    <Root>
      <App />
    </Root>
  )
})

afterEach(()=>{
  wrapped.unmount()
})

it('shows BrowserRouter', () => {
  expect(wrapped.find(BrowserRouter).length).toEqual(1)
})
