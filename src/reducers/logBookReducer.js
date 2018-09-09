import {FETCH_LOG} from '../actions/types'

export default function(state =[], action) {
  switch (action.type) {
    case FETCH_LOG:
      return action.payload
    default:
      return state;
  }
}
