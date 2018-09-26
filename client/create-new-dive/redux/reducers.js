import {GET_SITE_POSITION_AND_NAME} from './types'
import {createReducer} from 'utils.js'

export default createReducer(
  [], {
    [GET_SITE_POSITION_AND_NAME]: (state, {data}) => {
      return state
    }
  }
)
