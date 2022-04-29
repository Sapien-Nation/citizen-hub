import axios from '..';

export const claimFigureName = (body: {
  distributionId: string;
  figureName: string;
}) =>
  axios
    .post('/passport-api/figure', body)
    .catch(({ response }) => Promise.reject(response.data.message));
