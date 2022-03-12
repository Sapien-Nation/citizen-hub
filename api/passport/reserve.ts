export * from './figure';

import axios from '..';

export const reserveFigure = (body: {
  figureName: string;
  distributionId: string;
}) =>
  axios
    .post('/passport-api/figure', body)
    .then(({ data }) => data)
    .catch(({ response }) => Promise.reject(response.data.message));

export const resubmitReserveFigure = (body: {
  figureName: string;
  passportId: string;
}) =>
  axios
    .patch('/passport-api/figure', body)
    .then(({ data }) => data)
    .catch(({ response }) => Promise.reject(response.data.message));
