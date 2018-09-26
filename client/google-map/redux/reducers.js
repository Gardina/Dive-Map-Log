import _map from 'lodash.map'

import {CREATE_DIVESITE, FETCH_DIVESITES} from './types'
import {createReducer} from 'utils.js'

export default createReducer([], {
  [FETCH_DIVESITES]: (state, {data}) => {
    let fetchedSitesToArray = (_map(data, (site, id)=>{ site.id = id; return site }))
    return state.length === 0  ? fetchedSitesToArray : state
  },
  [CREATE_DIVESITE]: (state, {data}) => {
    return [...state, {["name"]: data.newSiteName,
                       ["lat"]: data.Latitude,
                       ["lng"]: data.Longitude,
                       ["id"]: `${data.Latitude}${data.Longitude}`} ]
  }
})
