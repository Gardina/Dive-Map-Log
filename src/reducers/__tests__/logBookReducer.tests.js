import logBookReducer from '../logBookReducer'
import {FETCH_LOG} from '../../actions/types'

it('handles actions of type FETCH_LOG', () => {
  const action = {
    type: FETCH_LOG,
    payload: [{
          siteName: 'napoleon reef',
          depth: 21,
          time: 30
        }]
  }

  const newState = logBookReducer([], action)

  expect(newState).toEqual([{
        siteName: 'napoleon reef',
        depth: 21,
        time: 30
      }])
})
