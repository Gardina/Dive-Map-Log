import _map from 'lodash.map'
import uniqid from 'uniqid'
import {CREATE_DIVESITE, FETCH_DIVESITES} from '../actions/types'

export default function(state=[], action) {
  switch (action.type) {
    case FETCH_DIVESITES:
    let fetchedSitesArray = (_map(action.payload, (site, id)=>{ site.id = id; return site }))
    return state.length === 0  ? fetchedSitesArray : state
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
