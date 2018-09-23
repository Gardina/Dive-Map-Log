import diversData from 'data/fake_data/diverLog'

import {
  FETCH_LOG,
} from './types';

export const fetchLog = (diverId) => {
  const req = diversData[diverId]

  return {
    type: FETCH_LOG,
    data: req
  }
};
