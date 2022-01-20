import axios from 'axios';

enum Envs {
  Sandbox = 'passport-sandbox.sapien.network',
  QAT = 'passport-qat.sapien.network',
}

const host = process.browser ? window.location.host : '';
const getAuthURL = () => {
  switch (host) {
    case Envs.Sandbox:
      return 'https://sandbox-oauth.sapien.network/';
    case Envs.QAT:
      return 'https://oauth-qat.sapien.network/';
    default:
      return 'https://oauth.sapien.network/';
  }
};

const getTokensURL = () => {
  switch (host) {
    case Envs.Sandbox:
      return 'https://token-sandbox.sapien.network/';
    case Envs.QAT:
      return 'https://token-qat.sapien.network/';
    default:
      return 'https://token-poc.sapien.network/';
  }
};

const instance = axios.create({
  baseURL: getTokensURL(),
});

export const authInstance = axios.create({
  baseURL: getAuthURL(),
});

instance.interceptors.request.use((config) => {
  const tokens = window.localStorage.getItem('tokens');
  if (tokens) {
    const { token } = JSON.parse(tokens);
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, undefined);

authInstance.interceptors.request.use((config) => {
  const tokens = window.localStorage.getItem('tokens');
  if (tokens) {
    const { token } = JSON.parse(tokens);
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, undefined);

export default instance;
