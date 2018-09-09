import diversData from '../fake_data/diverLog'

import {
  FETCH_LOG
} from './types';

export const fetchLog = (diverId) => {
  const request = diversData[diverId]

  return {
    type: FETCH_LOG,
    payload: request
  }
};
