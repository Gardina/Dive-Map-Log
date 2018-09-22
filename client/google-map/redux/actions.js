import diveSites from '../fake_data/divesites'

import {
  CREATE_DIVESITE,
  FETCH_DIVESITES,
} from './types';

export const fetchDiveSites = () => {
  const request = diveSites
  return {
    type: FETCH_DIVESITES,
    data: diveSites
  }
};

export const createDiveSite = (values, callback) => {
  callback()
  return {
    type: CREATE_DIVESITE,
    data: values
  }
};
