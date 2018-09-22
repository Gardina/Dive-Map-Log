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
    data: request
  }
};

export const fetchDiveSites = () => {
  const request = diveSites
  return {
    type: FETCH_DIVESITES,
    data: diveSites
  }
};

export const createDiveSite = (values) => {
  return {
    type: CREATE_DIVESITE,
    data: values
  }
};

export const getCoord = (lat, lng) => {
  return {
    type: GET_COORD,
    data: {lat, lng}
  }
};
