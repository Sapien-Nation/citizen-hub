import axios from '.';

export const replaceFigure = (body: {
  term: string;
  ignoreUrls: Array<string>;
}) =>
  axios
    .post('/api/v3/passport/avatar-refresh', body)
    .then(({ data }) => data)
    .catch(({ response }) => Promise.reject(response.data.message));
