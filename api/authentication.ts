import { authInstance } from '.';

export const login = async (body: {
  email: string;
  password: string;
  redirect: string;
  client: string;
}): Promise<{ token: string; torus: string; refresh: string }> =>
  authInstance
    .post('/api/v3/auth/login', body)
    .then(({ data }) => ({
      torus: data.torus,
      token: data.token,
      refresh: data.refresh,
    }))
    .catch((response) => Promise.reject(response.data.message));
