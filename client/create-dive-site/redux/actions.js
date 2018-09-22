import {
  GET_COORD
} from './types';

export const getCoord = (lat, lng) => {
  return {
    type: GET_COORD,
    data: {lat, lng}
  }
};
