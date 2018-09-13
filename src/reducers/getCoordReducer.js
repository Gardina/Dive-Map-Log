import {GET_COORD} from '../actions/types'

export default function(state =[], action) {
  switch (action.type) {
    case GET_COORD:
      return action.payload
    default:
      return state;
  }
}
