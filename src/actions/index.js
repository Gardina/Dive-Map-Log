import diversData from '../fake_data/diverLog'
import diveSites from '../fake_data/divesites'

import {
  FETCH_LOG,
  CREATE_DIVESITE,
  FETCH_DIVESITES,
  GET_COORD
} from './types';

export const fetchLog = (diverId) => {
  const request = diversData[diverId]

  return {
    type: FETCH_LOG,
    payload: request
  }
};

export const fetchDiveSites = () => {

  return {
    type: FETCH_DIVESITES,
    payload: diveSites
  }
};

export const createDiveSite = (lat, lng, callback) => {
  console.log('create site!!!')
  callback()
  return {
    type: CREATE_DIVESITE,
    payload: [lat, lng]
  }
};

export const getCoord = (lat, lng) => {
  console.log('get coord!!!')
  return {
    type: GET_COORD,
    payload: {lat, lng}
  }
};
