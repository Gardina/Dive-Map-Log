import {CREATE_NEW_DIVE} from './types'
import {createReducer} from 'utils.js'

export default createReducer(
  [], {
    [CREATE_NEW_DIVE]: (state, {data}) => {
      return state
    }
  }
)
