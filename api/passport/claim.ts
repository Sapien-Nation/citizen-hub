import axios from '..';

export const claimFigureName = (linkID: string) =>
  axios
    .post(`/passport-api/${linkID}/claim`)
    .catch(({ response }) => Promise.reject(response.data.message));
