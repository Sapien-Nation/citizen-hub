export * from './figure';

import axios from '..';

export const checkLink = (linkID: string) =>
  axios
    .get(`/api/v3/passport/validate-link/${linkID}`)
    .then(({ data }) => data)
    .catch(({ response }) => Promise.reject(response.data.message));
