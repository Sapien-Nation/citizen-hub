import { authInstance } from '.';

export const login = async (body: {
  email: string;
  password: string;
  redirect: string;
  client: string;
}) =>
  authInstance
    .post('/api/v3/auth/login', body)
    .then(({ data }) => data)
    .catch((response) => Promise.reject(response.data.message));

export const register = async (body: {
  displayName: string;
  email: string;
  password: string;
  username: string;
  redirect: string;
  client: string;
}) =>
  authInstance
    .post('/api/v3/auth/signup', body)
    .then(({ data }) => data)
    .catch((response) => Promise.reject(response.data.message));

export const logout = async (body: { email: string }) =>
  authInstance
    .post('/api/v3/auth/logout', body)
    .catch((response) => Promise.reject(response.data.message));
