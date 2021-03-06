import * as axios from 'axios';

const BASE_URL = 'https://www.xvideos.com';

const createRequest = (options = {}) => {
  return axios.default.create(
    Object.assign(
      {
        baseURL: BASE_URL,
      },
      options,
    ),
  );
};

const base = {
  BASE_URL,
  createRequest,
};

export default base;
