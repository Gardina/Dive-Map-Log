import { GET_SITE_POSITION_AND_NAME } from "./types";

export const getSitePosAndName = (lat, lng, name) => {
  return {
    type: GET_SITE_POSITION_AND_NAME,
    data: { lat, lng, name }
  };
};
