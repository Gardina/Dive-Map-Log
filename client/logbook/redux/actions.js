import diversData from "data/fake_data/diverLog";

import { FETCH_LOG, CREATE_NEW_DIVE } from "./types";

export const fetchLog = diverId => {
  const req = diversData[diverId];

  return {
    type: FETCH_LOG,
    data: req
  };
};

export const createNewDive = values => {
  return {
    type: CREATE_NEW_DIVE,
    data: values
  };
};
