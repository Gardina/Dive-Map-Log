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
  const request = diveSites
  return {
    type: FETCH_DIVESITES,
    payload: diveSites
  }
};

export const createDiveSite = (values, callback) => {
  callback()
  return {
    type: CREATE_DIVESITE,
    payload: values
  }
};

export const getCoord = (lat, lng) => {
  return {
    type: GET_COORD,
    data: {lat, lng}
  }
};
