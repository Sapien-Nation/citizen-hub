// api
import { authInstance } from '.';

export const authFetcher = () =>
  authInstance
    .get('/user-api/me')
    .then(({ data }) => data)
    .catch((response) => Promise.reject(response.data.message));
