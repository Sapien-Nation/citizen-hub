import axios from '.';

export const reservePassport = (body: {
  amount: number;
  units: string;
  type: string;
  address: string;
  distributionId: string;
}) =>
  axios
    .post('/api/v3/passportPurchase/reserve', body)
    .then(({ data }) => {
      return data;
    })
    .catch(({ response }) => {
      Promise.reject(response.data.message);
    });
