import axios from '..';

export const claimFigureName = (linkID: string) =>
  axios
    .post(`/api/v3/passport/${linkID}/claim`)
    .catch(({ response }) => Promise.reject(response.data.message));
