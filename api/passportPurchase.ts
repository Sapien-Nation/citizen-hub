import axios from '.';

export const reservePassport = (body: {
  amount: number;
  units: string;
  type: string;
  address: string;
  distributionId: string;
}) =>
  axios
    .post('/purchase-api/reserve', body)
    .then(({ data }) => {
      return data;
    })
    .catch(({ response }) => {
      Promise.reject(response.data.message);
    });
