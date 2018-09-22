import {CREATE_DIVESITE, FETCH_DIVESITES} from '../actions/types'
import { createReducer } from 'client/utils'
import _map from 'lodash.map'
import uniqid from 'uniqid'

export default createReducer(state=[],{
  [CREATE_DIVESITE]:
})
export default function(state=[], action) {
  switch (action.type) {
    case FETCH_DIVESITES:
    let fetchedSitesToArray = (_map(action.payload, (site, id)=>{ site.id = id; return site }))
    return state.length === 0  ? fetchedSitesToArray : state
    case CREATE_DIVESITE:
    const newSite = action.payload
    return [...state, {["name"]: newSite.newSiteName,
                       ["lat"]: newSite.Latitude,
                       ["lng"]: newSite.Longitude,
                       ["id"]: uniqid()} ]
    default:
      return state;
  }
}
