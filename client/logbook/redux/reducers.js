import {FETCH_LOG} from './types'
import {createReducer} from 'utils.js'

export default createReducer([], {
  [FETCH_LOG]: (state, {data}) => {
    return data
  }
})
