import _map from 'lodash.map'
import uniqid from 'uniqid'
import {CREATE_DIVESITE, FETCH_DIVESITES} from '../actions/types'

export default function(state =[], action) {
  switch (action.type) {
    case FETCH_DIVESITES:
      return  (_map(action.payload, (site, id)=>{
                site.id = id;
                return site }))
    case CREATE_DIVESITE:
      return state;
    default:
      return state;
  }
}
