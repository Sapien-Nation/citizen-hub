export * from './figure';

import axios from '..';

export const reserveFigure = (linkID: string, body: { figureName: string }) =>
  axios
    .post(`/api/v3/passport/${linkID}/reserve`, body)
    .then(({ data }) => data)
    .catch(({ response }) => Promise.reject(response.data.message));
