export * from './figure';

import axios from '..';

export const reserveFigure = (linkID: string) =>
  axios
    .get(`/api/v3/passport/reserve/${linkID}`)
    .then(({ data }) => data)
    .catch(({ response }) => Promise.reject(response.data.message));
