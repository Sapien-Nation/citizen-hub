import axios from '..';
import FormData from 'form-data';

export const replaceFigure = (body: {
  term: string;
  ignoreUrls: Array<string>;
}) =>
  axios
    .post('/passport-api/avatar-refresh', body)
    .then(({ data }) => data)
    .catch(({ response }) => Promise.reject(response.data.message));

export const uploadManualFigure = (body: FormData) =>
  axios
    .post('/passport-api/figure-upload', body)
    .then(({ data }) => data)
    .catch(({ response }) => Promise.reject(response.data.message));

export const createPassport = (body: any) =>
  axios
    .post('/passport-api/avatar', body)
    .then(({ data }) => data)
    .catch(({ response }) => Promise.reject(response.data.message));

export const createStyledAvatar = (formData: any) =>
  axios
    .post('/ml-api/avatar', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      transformRequest: (data, headers) => {
        return data;
      },
    })
    .then(({ data }) => data)
    .catch(({ response }) => Promise.reject(response.data.message));
