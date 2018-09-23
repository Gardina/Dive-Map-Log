import {GET_COORD} from './types'
import {createReducer} from 'utils.js'

export default createReducer(
  [], {
    [GET_COORD]: (state, {data}) => {
      return data
    }
  }
)
