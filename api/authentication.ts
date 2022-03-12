import { authInstance } from '.';

export const login = async (body: {
  email: string;
  password: string;
  redirect: string;
  client: string;
}) =>
  authInstance
    .post('/auth-api/login', body)
    .then(({ data }) => data)
    .catch(({ response }) => Promise.reject(response.data.message));

export const register = async (body: {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  username: string;
  redirect: string;
  client: string;
}) =>
  authInstance
    .post('/auth-api/signup', body)
    .then(({ data }) => data)
    .catch(({ response }) => Promise.reject(response.data.message));

export const logout = async (body: { email: string }) =>
  authInstance
    .post('/auth-api/logout', body)
    .catch(({ response }) => Promise.reject(response.data.message));

export const forgot = async (body: { email: string }) =>
  authInstance
    .post('/user-api/change-password', body)
    .catch(({ response }) => Promise.reject(response.data.message));

export const changePassword = async ({
  password,
  token,
}: {
  password: string;
  token: string;
}) =>
  authInstance
    .post('/user-api/reset-password', {
      password,
      token,
    })
    .catch(({ response }) => Promise.reject(response.data.message));
