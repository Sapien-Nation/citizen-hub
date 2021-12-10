export * from './figure';

import axios from '..';

export const checkLink = (linkID: string) =>
  axios
    .post('/api/v3/passport', linkID)
    .then(({ data }) => data)
    .catch(({ response }) => Promise.reject(response.data.message));
