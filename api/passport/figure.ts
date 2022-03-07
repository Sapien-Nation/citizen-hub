import axios from '..';
import FormData from 'form-data';

export const replaceFigure = (body: {
  term: string;
  ignoreUrls: Array<string>;
}) =>
  axios
    .post('/api/v3/passport/avatar-refresh', body)
    .then(({ data }) => data)
    .catch(({ response }) => Promise.reject(response.data.message));

export const uploadManualFigure = (body: FormData) =>
  axios
    .post('/api/v3/passport/figure-upload', body)
    .then(({ data }) => data)
    .catch(({ response }) => Promise.reject(response.data.message));

export const createPassport = (body: FormData) =>
  axios
    .post('/api/v3/passport', body)
    .then(({ data }) => data)
    .catch(({ response }) => Promise.reject(response.data.message));

export const createStyledAvatar = (formData: any) =>
  axios
    .post('/api/v3/passport/avatar', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      transformRequest: (data, headers) => {
        return data;
      },
    })
    .then(({ data }) => data)
    .catch(({ response }) => Promise.reject(response.data.message));
